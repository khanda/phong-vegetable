import React from 'react'
import {Text, View} from 'react-native';
import FilterLink from "../containers/FilterLink";
import {VisibilityFilters} from "../actions";

export class Footer extends React.Component {
  render() {
    return (
      <View>
        <Text Show/>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
          All
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
          Active
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed
        </FilterLink>
      </View>
    )
  }
}