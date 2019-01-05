var eventConfig = 
{
  events: [
    {
      eventName:"cubeUp",
      eventTitle:"Pick Up Cube",
      eventKey:"a",
      variableLink:[{"var":"cubeCount","amt":1}]
    },
    {
      eventName:"cubeDown",
      eventTitle:"Dropped Cube",
      eventKey:"b",
      variableLink:[{"var":"cubeCount","amt":-1}]
    }
  ],
  layouts: [
    {
      eventName:"cubeUp",
      groupName:"cube",
      heightWeight:1,
      widthWeight:0.6
    },
    {
      eventName:"cubeDown",
      groupName:"cube",
      heightWeight:1,
      widthWeight:0.4
    },
    {
      eventName:"blankevt1",
      groupName:"blankgrp1",
      heightWeight:8,
      widthWeight:1
    }
  ],
  variables: [
    {
      variableName:"cubeCount",
      variableTitle:"Cubes",
      variableLimit:[0,1],
      variableAmount:1
    }
  ],
  variableHeightWeight: 1
}