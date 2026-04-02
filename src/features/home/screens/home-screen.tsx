import { useCallback, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlashList } from "@shopify/flash-list";
import { LinearGradient } from "expo-linear-gradient";

import { palette, spacing } from "@/theme";
import type { HomeStackParamList } from "@/navigation/types";
import type { Question, ListItem } from "@/features/home/types";
import { HomeTopNav } from "@/features/home/components/home-top-nav";
import { CourseSwitcher } from "@/features/home/components/course-switcher";
import { QuestionCard } from "@/features/home/components/question-card";
import { ProPromoBanner } from "@/features/home/components/pro-promo-banner";

import questionsData from "@/mock-data/questions.json";
import userData from "@/mock-data/user.json";

const questions = questionsData as Question[];
const PROMO_AFTER_QUESTION = 3; // Show promo banner after this many questions

type HomeNavProp = NativeStackNavigationProp<HomeStackParamList>;

export function HomeScreen() {
  const navigation = useNavigation<HomeNavProp>();
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(
    null,
  );

  const listData = useMemo<ListItem[]>(() => {
    const items: ListItem[] = [];
    for (let i = 0; i < questions.length; i++) {
      items.push({ type: "question", data: questions[i] });
      if (i + 1 === PROMO_AFTER_QUESTION) {
        items.push({
          type: "promo",
          questionNumber: questions[i].questionNumber,
          completedTodayCount: questions[i].completedTodayCount,
        });
      }
    }
    return items;
  }, []);

  const handleMenuPress = useCallback(() => {
    navigation.navigate("Settings");
  }, [navigation]);

  const handleQuestionPress = useCallback((question: Question) => {
    setSelectedQuestionId((prev) =>
      prev === question.id ? null : question.id,
    );
  }, []);

  const handleFeedback = useCallback(
    (question: Question) => {
      setSelectedQuestionId(null);
      navigation.navigate("SessionResult", {
        questionId: question.id,
      });
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({ item }: { item: ListItem }) => {
      if (item.type === "promo") {
        return (
          <ProPromoBanner
            questionNumber={item.questionNumber}
            completedTodayCount={item.completedTodayCount}
          />
        );
      }

      return (
        <QuestionCard
          question={item.data}
          isExpanded={selectedQuestionId === item.data.id}
          hideStart={selectedQuestionId != null}
          onPress={() => handleQuestionPress(item.data)}
          onFeedback={() => handleFeedback(item.data)}
        />
      );
    },
    [handleQuestionPress, handleFeedback, selectedQuestionId],
  );

  const getItemType = useCallback((item: ListItem) => item.type, []);

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.container}>
        <HomeTopNav streak={userData.streak} onMenuPress={handleMenuPress} />

        <View style={styles.courseSwitcherWrapper}>
          <CourseSwitcher />
        </View>

        <View style={styles.listContainer}>
          <FlashList
            data={listData}
            renderItem={renderItem}
            getItemType={getItemType}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
            extraData={selectedQuestionId}
          />
        </View>

        <LinearGradient
          colors={["rgba(255,255,255,0)", "rgba(255,255,255,1)"]}
          style={styles.fadeGradient}
          pointerEvents="none"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.white,
  },
  container: {
    flex: 1,
  },
  courseSwitcherWrapper: {
    marginTop: spacing.s,
    marginBottom: spacing.m,
  },
  listContainer: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 100,
  },
  fadeGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
  },
});
