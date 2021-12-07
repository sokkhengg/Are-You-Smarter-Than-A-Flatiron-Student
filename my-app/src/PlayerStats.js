import React from "react";
import { Icon, Statistic } from "semantic-ui-react";

export default function PlayerStats() {
  return (
      <>
      <br />
      <br />
    <Statistic.Group widths="three">
      <Statistic>
        <Statistic.Value>
          <Icon name="money" />
          &nbsp;&nbsp;$0
        </Statistic.Value>
        <Statistic.Label>Money Earned</Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Value>
          <Icon name="checkmark" />&nbsp;&nbsp;0
        </Statistic.Value>
        <Statistic.Label>Correct Answers</Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Value>
          <Icon name="x" />&nbsp;&nbsp;0
        </Statistic.Value>
        <Statistic.Label>Wrong/Skipped</Statistic.Label>
      </Statistic>
    </Statistic.Group>
    </>
  );
}
