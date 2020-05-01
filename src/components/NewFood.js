import React, { Component } from "react";
import SearchFood from "./SearchFood";
import ViewResults from "./ViewResults";

export default class NewFood extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
    };

    this.sendResults = this.sendResults.bind(this);
  }

  sendResults({common, branded}) {
    console.log(common)
    let commonMap = common.map((food) => {
      return { food_name: food.food_name, serving_unit: food.serving_unit, tag: "common", calories: food.nf_calories};
    });

    let brandedMap = branded.map((food) => {
        return { food_name: food.food_name, serving_unit: food.serving_unit, tag: "branded", id: food.nix_item_id, calories: food.nf_calories }
    })

    this.setState({ results: [...brandedMap, ...commonMap] });
  }
  render() {
    return (
      <div>
        <SearchFood sendResults={this.sendResults} />
        <ViewResults results={this.state.results} />
      </div>
    );
  }
}
