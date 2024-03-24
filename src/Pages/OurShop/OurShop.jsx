import { Helmet } from "react-helmet-async";
import CoverImg from "../Shared/CoverImg/CoverImg";
import shopBanner from "../../assets/shop/banner2.jpg";
import "react-tabs/style/react-tabs.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import ShopTab from "./ShopTab/ShopTab";
import { useParams } from "react-router-dom";
const OurShop = () => {
  const { category } = useParams();
  const categories = ["salad", "pizza", "soups", "desserts", "drinks"];
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Shop</title>
      </Helmet>
      <CoverImg img={shopBanner} title={"OUr Shop"}></CoverImg>
      <Tabs
        className="mt-12"
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className="text-center uppercase font-medium text-2xl mb-8">
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <ShopTab items={salads}></ShopTab>
        </TabPanel>
        <TabPanel>
          <ShopTab items={pizza}></ShopTab>
        </TabPanel>
        <TabPanel>
          <ShopTab items={soups}></ShopTab>
        </TabPanel>
        <TabPanel>
          <ShopTab items={desserts}></ShopTab>
        </TabPanel>
        <TabPanel>
          <ShopTab items={drinks}></ShopTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};
export default OurShop;
