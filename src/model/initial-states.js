let sections = new Map();

sections.set('one', {
  id: 1,
  name: 'What went well',
  active: true,
  data: ["Releases to Alpha and Beta clusters went well", "Team velocity was awesome", "ReactJS upgrade", "Integration of new payment gateway", "Execution of DevOps dependencies"],
  color: "#4CAF50"

});

sections.set('two', {
  id: 2,
  name: 'What can be improved',
  active: true,
  data: ['Project handoff from UI/UX team to engineers', 'Number of P0s could be reduced', 'Test coverage'],
  color: "#F44336"
});

sections.set('three', {
  id: 3,
  name: 'Start doing',
  active: true,
  data: ['Clearing tech debts', 'Documenting test cases and maintaining a record of failed ones'],
  color: "#2196F3"
});

sections.set('four', {
  id: 4,
  name: 'Action items',
  active: true,
  data: [],
  color: "#673AB7"
});

export default sections;