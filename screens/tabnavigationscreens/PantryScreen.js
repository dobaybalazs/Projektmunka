import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Header from "../../components/Header";
import ItemFilter, { filters } from "../../components/ItemFilter";
import Colors from "../../constants/Colors";

const NamedList = ({ name }) => {
  return (
    <View>
      <Text style={{ textAlign: "center", fontSize: 24 }}>{name}</Text>
    </View>
  );
};

const PantryScreen = (props) => {
  const [activeFilter, setActiveFilter] = useState(filters.husok);
  return (
    <View style={styles.screen}>
      <Header
        style={styles.header}
        source={require("../../assets/headerimages/pantry.jpg")}
      >
        Kamra
      </Header>
      <View style={styles.body}>
        <ItemFilter
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <View style={styles.list}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
          >
            {activeFilter === filters[0].name && (
              <NamedList name={filters[0].text} />
            )}
            {activeFilter === filters[1].name && (
              <NamedList name={filters[1].text} />
            )}
            {activeFilter === filters[2].name && (
              <NamedList name={filters[2].text} />
            )}
            {activeFilter === filters[3].name && (
              <NamedList name={filters[3].text} />
            )}
            {activeFilter === filters[4].name && (
              <NamedList name={filters[4].text} />
            )}
            {activeFilter === filters[5].name && (
              <NamedList name={filters[5].text} />
            )}

            {/* <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard /> */}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 3,
  },
  body: {
    flex: 5,
    width: "100%",
  },
  list: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.whitecolor,
  },
});

export default PantryScreen;
