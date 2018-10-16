import React from 'react'
import {Text, View, StyleSheet} from 'react-native';
import FilterLink from "../containers/FilterLink";
import {VisibilityFilters} from "../actions";

export class Footer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});