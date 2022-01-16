import MealItem from "../components/MealItem";
import MealList from "../components/MealList";
import { CATEGORIES } from "../data/dummy-data";
import { useSelector } from "react-redux";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const availableMeals = useSelector((state) => state.meals.meals);

  const displayedMeals = availableMeals.filter((meal) =>
    meal.categoryIds.includes(catId)
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

export default CategoryMealsScreen;

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((category) => category.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};
