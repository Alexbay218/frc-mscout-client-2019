var eventConfig =
{
  events: [
    {
      eventName:"habLine1",
      eventTitle:"Crossed Hab Line Lvl 1",
      eventKey:"a",
      variableLink:[]
    },
    {
      eventName:"habLine2",
      eventTitle:"Crossed Hab Line Lvl 2",
      eventKey:"b",
      variableLink:[]
    },
    {
      eventName:"cargoUp",
      eventTitle:"Picked up Cargo",
      eventKey:"c",
      variableLink:[{"var":"cargoCount","amt":1},{"var":"hatchCount","amt":-1}]
    },
  	{
  	  eventName:"cargoDrop",
  	  eventTitle:"Dropped Cargo",
  	  eventKey:"d",
  	  variableLink:[{"var":"cargoCount","amt":-1}]
  	},
  	{
  	  eventName:"hatchUp",
  	  eventTitle:"Picked up Hatch",
  	  eventKey:"e",
  	  variableLink:[{"var":"cargoCount","amt":-1},{"var":"hatchCount","amt":1}]
  	},
  	{
  	  eventName:"hatchDrop",
  	  eventTitle:"Dropped Hatch",
  	  eventKey:"f",
  	  variableLink:[{"var":"hatchCount","amt":-1}]
  	},
  	{
  	  eventName:"shipSuccess",
  	  eventTitle:"Scored on Cargo Ship",
  	  eventKey:"g",
  	  variableLink:[{"var":"cargoCount","amt":-1},{"var":"hatchCount","amt":-1}]
  	},
  	{
  	  eventName:"shipFail",
  	  eventTitle:"Failed on Cargo Ship",
  	  eventKey:"h",
  	  variableLink:[{"var":"cargoCount","amt":-1},{"var":"hatchCount","amt":-1}]
  	},
  	{
  	  eventName:"rocket1Success",
  	  eventTitle:"Scored on Rocket Lvl 1",
  	  eventKey:"i",
  	  variableLink:[{"var":"cargoCount","amt":-1},{"var":"hatchCount","amt":-1}]
  	},
  	{
  	  eventName:"rocket1Fail",
  	  eventTitle:"Failed on Rocket Lvl 1",
  	  eventKey:"j",
  	  variableLink:[{"var":"cargoCount","amt":-1},{"var":"hatchCount","amt":-1}]
  	},
  	{
  	  eventName:"rocket2Success",
  	  eventTitle:"Scored on Rocket Lvl 2",
  	  eventKey:"k",
  	  variableLink:[{"var":"cargoCount","amt":-1},{"var":"hatchCount","amt":-1}]
  	},
  	{
  	  eventName:"rocket2Fail",
  	  eventTitle:"Failed on Rocket Lvl 2",
  	  eventKey:"l",
  	  variableLink:[{"var":"cargoCount","amt":-1},{"var":"hatchCount","amt":-1}]
  	},
  	{
  	  eventName:"rocket3Success",
  	  eventTitle:"Scored on Rocket Lvl 3",
  	  eventKey:"m",
  	  variableLink:[{"var":"cargoCount","amt":-1},{"var":"hatchCount","amt":-1}]
  	},
  	{
  	  eventName:"rocket3Fail",
  	  eventTitle:"Failed on Rocket Lvl 3",
  	  eventKey:"n",
  	  variableLink:[{"var":"cargoCount","amt":-1},{"var":"hatchCount","amt":-1}]
  	},
  	{
  	  eventName:"habClimb1",
  	  eventTitle:"Hab Climb Lvl 1",
  	  eventKey:"o",
  	  variableLink:[]
  	},
  	{
  	  eventName:"habClimb2",
  	  eventTitle:"Hab Climb Lvl 2",
  	  eventKey:"p",
  	  variableLink:[]
  	},
  	{
  	  eventName:"habClimb3",
  	  eventTitle:"Hab Climb Lvl 3",
  	  eventKey:"q",
  	  variableLink:[]
  	},
  	{
  	  eventName:"habClimbFail",
  	  eventTitle:"Failed Hab Climb",
  	  eventKey:"r",
  	  variableLink:[]
  	}
  ],
  layouts: [
	  {
	    eventName:"habLine1",
	    buttonName:"Crossed Hab Line Lvl 1",
	    groupName:"habline",
	    heightWeight:1,
	    widthWeight:0.7
  	},
  	{
  	  eventName:"habLine2",
  	  buttonName:"Lvl 2",
  	  groupName:"habline",
  	  heightWeight:1,
  	  widthWeight:0.3
  	},
    {
      eventName:"cargoUp",
  	  buttonName:"Picked Up Cargo",
      groupName:"cargo",
      heightWeight:1,
      widthWeight:0.6
    },
  	{
  	  eventName:"cargoDrop",
  	  buttonName:"Dropped Cargo",
  	  groupName:"cargo",
  	  heightWeight:1,
  	  widthWeight:0.4
  	},
    {
      eventName:"hatchUp",
  	  buttonName:"Picked Up Hatch",
      groupName:"hatch",
      heightWeight:1,
      widthWeight:0.6
    },
  	{
  	  eventName:"hatchDrop",
  	  buttonName:"Dropped Hatch",
  	  groupName:"hatch",
  	  heightWeight:1,
  	  widthWeight:0.4
  	},
    {
      eventName:"shipSuccess",
      buttonName:"Scored on Cargo Ship",
      groupName:"ship",
      heightWeight:1,
      widthWeight:0.7
    },
    {
      eventName:"shipFail",
      buttonName:"Failed",
      groupName:"ship",
      heightWeight:1,
      widthWeight:0.3
    },
    {
      eventName:"rocket1Success",
      buttonName:"Scored on Rocket Lvl 1",
      groupName:"rocket1",
      heightWeight:1,
      widthWeight:0.7
    },
    {
      eventName:"rocket1Fail",
      buttonName:"Failed",
      groupName:"rocket1",
      heightWeight:1,
      widthWeight:0.3
    },
    {
      eventName:"rocket2Success",
      buttonName:"Scored on Rocket Lvl 2",
      groupName:"rocket2",
      heightWeight:1,
      widthWeight:0.7
    },
    {
      eventName:"rocket2Fail",
      buttonName:"Failed",
      groupName:"rocket2",
      heightWeight:1,
      widthWeight:0.3
    },
    {
      eventName:"rocket3Success",
      buttonName:"Scored on Rocket Lvl 3",
      groupName:"rocket3",
      heightWeight:1,
      widthWeight:0.7
    },
    {
      eventName:"rocket3Fail",
      buttonName:"Failed",
      groupName:"rocket3",
      heightWeight:1,
      widthWeight:0.3
    },
    {
      eventName:"habClimb1",
      buttonName:"Climbed Lvl 1",
      groupName:"habclimb",
      heightWeight:1,
      widthWeight:0.4
    },
    {
      eventName:"habClimb2",
      buttonName:"Lvl 2",
      groupName:"habclimb",
      heightWeight:1,
      widthWeight:0.166
    },
    {
      eventName:"habClimb3",
      buttonName:"Lvl 3",
      groupName:"habclimb",
      heightWeight:1,
      widthWeight:0.166
    },
    {
      eventName:"habClimbFail",
      buttonName:"Failed",
      groupName:"habclimb",
      heightWeight:1,
      widthWeight:0.267
    }
  ],
  variables: [
    {
      variableName:"cargoCount",
      variableTitle:"Cargo",
      variableLimit:[0,1],
      variableAmount:0
    },
  	{
  	  variableName:"hatchCount",
  	  variableTitle:"Hatch",
  	  variableLimit:[0,1],
  	  variableAmount:0
  	}
  ],
  variableHeightWeight: 1,
  logHeightWeight: 2
}
