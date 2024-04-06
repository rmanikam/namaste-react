import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/mockResListData.json";
import "@testing-library/jest-dom";
import { withPromotedLabel } from "../RestaurantCard";
it("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Chinese Wok");

  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with promoted label", () => {
  render(withPromotedLabel(RestaurantCard));

  const Promoted = screen.getByText("Promoted");

  expect(Promoted).toBeInTheDocument();
});
