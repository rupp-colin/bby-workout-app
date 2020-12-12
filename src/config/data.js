const workOuts = [
  {
    day: 1,
    type: 'push1',
    movements: [
      {
        name: 'Ring Dip',
        sets: 3,
        reps: 6,
        tempo: '30X1',
        rest: 90,
        intensity: 'Elbows In'
      },
      {
        name: 'Archer Pushup',
        sets: 3,
        reps: 4,
        tempo: '20X1',
        rest: 90,
        intensity: 'Alternating'
      },
      {
        name: 'Chest Fly',
        sets: 3,
        reps: 8,
        tempo: '30X1',
        rest: 90,
      },
      {
        name: 'Tricep Dip',
        sets: 3,
        reps: 6,
        tempo: '20X1',
        rest: 90,
      },
      {
        name: 'Tricep Extension',
        sets: 3,
        reps: 8,
        tempo: '30X1',
        rest: 90,
      },
    ]
  },
  {
    day: 2,
    type: 'pull1',
    movements: [
      {
        name: 'Chinup',
        sets: 3,
        reps: 6,
        tempo: '30X2',
        rest: 120,
        intensity: 'Regular, Tuck L, or L Sit'
      },
      {
        name: 'Bodyweight Row',
        sets: 3,
        reps: 10,
        tempo: '20X1',
        rest: 90,
        intensity: 'Two Arms'
      },
      {
        name: 'Pelican Curl',
        sets: 3,
        reps: 5,
        tempo: '30X1',
        rest: 90,
      },
      {
        name: 'Face Pull',
        sets: 3,
        reps: 8,
        tempo: '30X0',
        rest: 90,
      },
      {
        name: 'Ring Rollout',
        sets: 3,
        reps: 8,
        tempo: '40X0',
        rest: 90,
      },
    ]
  },
  {
    day: 3,
    type: 'legs1',
    movements: [
      {
        name: 'Back Squat',
        sets: 5,
        reps: 5,
        tempo: '20X1',
        rest: 105,
      },
      {
        name: 'Single Leg Deadlift',
        sets: 3,
        reps: 8,
        tempo: '20X1',
        rest: 90,
      },
      {
        name: 'Walking Lunge',
        sets: 3,
        reps: 8,
        tempo: '20X1',
        rest: 90,
        intensity: 'Weight Overhead',
      },
      {
        name: 'Calf Raise',
        sets: 3,
        reps: 15,
        tempo: '20X1',
        rest: 90,
        intensity: 'Weight Overhead',
      },
    ]
  },
  {
    day: 4,
    type: 'rest',
    movements: [
      {
        name: null,
        sets: null,
        reps: null,
        tempo: null,
        rest: null,
      },
    ]
  },
  {
    day: 5, // 2nd push day
    type: 'push2',
    movements: [
      {
        name: 'Ring Dip',
        sets: 3,
        reps: 7,
        tempo: '30x1',
        rest: 90,
        intensity: 'Elbows in'
      },
      {
        name: 'Shoulder Pushup',
        sets: 3,
        reps: 4,
        tempo: '30x1',
        rest: 90,
        intensity: 'Feet on Floor',
      },
      {
        name: 'Bulgarian Pushup',
        sets: 3,
        reps: 8,
        tempo: '20x1',
        rest: 90,
      },
      {
        name: 'Shoulder Shrug',
        sets: 3,
        reps: 8,
        tempo: '20x1',
        rest: 90,
        instensity: 'Back to wall',
      },
      {
        name: 'Tricep Dip',
        sets: 3,
        reps: 8,
        tempo: '20x1',
        rest: 90,
      },
    ]
  },
  {
    day: 6,// 2nd  PULL
    type: 'pull2',
    movements: [
      {
        name: 'Mantle Chinup',
        sets: 3,
        reps: 4,
        tempo: '30x2',
        rest: 90,
      },
      {
        name: 'Archer Bodyweight Row',
        sets: 3,
        reps: 4,
        tempo: '20x0',
        rest: 90,
      },
      {
        name: 'Face Pull',
        sets: 3,
        reps: 9,
        tempo: '20X0',
        rest: 90,
      },
      {
        name: 'Bodyweight Bicep Curl',
        sets: 3,
        reps: 8,
        tempo: '30x1',
        rest: 90,
      },
    ]
  },
  {
    day: 7,
    type: 'legs2',
    movements: [
      {
        name: 'Front Squat',
        sets: 3,
        reps: 8,
        tempo: '21X1',
        rest: 90,
      },
      {
        name: 'Deadlift',
        sets: 3,
        reps: 8,
        tempo: '20x1',
        rest: 90,
      },
      {
        name: 'Box Jump',
        sets: 3,
        reps: 20,
        tempo: '20x1',
        rest: 90,
      },
    ]
  },
  {
    day: 8,
    type: 'rest',
    movements: [
      {
        name: null,
        sets: null,
        reps: null,
        tempo: null,
        rest: null,
      },
    ]
  },
  {
    day: 9,  // 3rd push day
    type: 'push1',
    movements: [
      {
        name: 'Ring Dip',
        sets: 3,
        reps: 8,
        tempo: '30X1',
        rest: 90,
        intensity: 'Elbows In'
      },
      {
        name: 'Archer Pushup',
        sets: 3,
        reps: 5,
        tempo: '20X1',
        rest: 90,
        intensity: 'Alternating'
      },
      {
        name: 'Chest Fly',
        sets: 3,
        reps: 9,
        tempo: '30X1',
        rest: 90,
      },
      {
        name: 'Tricep Dip',
        sets: 3,
        reps: 10,
        tempo: '20X1',
        rest: 90,
      },
      {
        name: 'Tricep Extension',
        sets: 3,
        reps: 9,
        tempo: '30X1',
        rest: 90,
      },
    ]
  },
  {
    day: 10, // 3rd PULL
    type: 'pull1',
    movements: [
      {
        name: 'Chinup',
        sets: 3,
        reps: 7,
        tempo: '30X2',
        rest: 120,
        intensity: 'Regular, Tuck L, or L Sit'
      },
      {
        name: 'Bodyweight Row',
        sets: 3,
        reps: 12,
        tempo: '20X1',
        rest: 90,
        intensity: 'Two Arms'
      },
      {
        name: 'Pelican Curl',
        sets: 3,
        reps: 6,
        tempo: '30X1',
        rest: 90,
      },
      {
        name: 'Face Pull',
        sets: 3,
        reps: 10,
        tempo: '30X0',
        rest: 90,
      },
      {
        name: 'Ring Rollout',
        sets: 3,
        reps: 9,
        tempo: '40X0',
        rest: 90,
      },
    ]
  },
  {
    day: 11,
    type: 'legs1',
    movements: [
      {
        name: 'Back Squat',
        sets: 5,
        reps: 6,
        tempo: '20X1',
        rest: 105,
      },
      {
        name: 'Single Leg Deadlift',
        sets: 3,
        reps: 8,
        tempo: '20X1',
        rest: 90,
      },
      {
        name: 'Walking Lunge',
        sets: 3,
        reps: 10,
        tempo: '20X1',
        rest: 90,
        intensity: 'Weight Overhead',
      },
      {
        name: 'Calf Raise',
        sets: 3,
        reps: 20,
        tempo: '20X1',
        rest: 90,
        intensity: 'Weight Overhead',
      },
    ]
  },
  {
    day: 12,
    type: 'rest',
    movements: [
      {
        name: null,
        sets: null,
        reps: null,
        tempo: null,
        rest: null,
      },
    ]
  },
  {
    day: 13,  // 4th push day
    type: 'push2',
    movements: [
      {
        name: 'Ring Dip',
        sets: 4,
        reps: 6,
        tempo: '30x1',
        rest: 90,
        intensity: 'Elbows in'
      },
      {
        name: 'Shoulder Pushup',
        sets: 3,
        reps: 8,
        tempo: '30x1',
        rest: 90,
        intensity: 'Feet on Floor',
      },
      {
        name: 'Bulgarian Pushup',
        sets: 3,
        reps: 10,
        tempo: '20x1',
        rest: 90,
      },
      {
        name: 'Shoulder Shrug',
        sets: 3,
        reps: 10,
        tempo: '2s isometric',
        rest: 90,
        instensity: 'Back to wall',
      },
      {
        name: 'Tricep Dip',
        sets: 4,
        reps: 6,
        tempo: '20x1',
        rest: 90,
      },
    ]
  },
  {
    day: 14,
    type: 'pull2', // 4th PULL
    movements: [
      {
        name: 'Mantle Chinup',
        sets: 3,
        reps: 5,
        tempo: '30x2',
        rest: 90,
      },
      {
        name: 'Archer Bodyweight Row',
        sets: 3,
        reps: 6,
        tempo: '20x0',
        rest: 90,
      },
      {
        name: 'Face Pull',
        sets: 3,
        reps: 10,
        tempo: '20X0',
        rest: 90,
      },
      {
        name: 'Bodyweight Bicep Curl',
        sets: 3,
        reps: 9,
        tempo: '30x1',
        rest: 90,
      },
    ]
  },
  {
    day: 15,
    type: 'legs2',
    movements: [
      {
        name: 'Front Squat',
        sets: 3,
        reps: 9,
        tempo: '21X1',
        rest: 90,
      },
      {
        name: 'Deadlift',
        sets: 4,
        reps: 8,
        tempo: '20x1',
        rest: 90,
      },
      {
        name: 'Box Jump',
        sets: 3,
        reps: 20,
        tempo: '20x1',
        rest: 90,
      },
    ]
  },
  {
    day: 16,
    type: 'rest',
    movements: [
      {
        name: null,
        sets: null,
        reps: null,
        tempo: null,
        rest: null,
      },
    ]
  },
  {
    day: 17,  // 5th push day
    type: 'push1',
    movements: [
      {
        name: 'Ring Dip', //still climbing
        sets: 4,
        reps: 7,
        tempo: '30X1',
        rest: 90,
        intensity: 'Elbows In'
      },
      {
        name: 'Archer Pushup', // still climbing
        sets: 3,
        reps: 6,
        tempo: '20X1',
        rest: 90,
        intensity: 'Alternating'
      },
      {
        name: 'Chest Fly',
        sets: 3,
        reps: 10,
        tempo: '30X1',
        rest: 90,
      },
      {
        name: 'Tricep Dip',
        sets: 3,
        reps: 10,
        tempo: '20X1',
        rest: 90,
      },
      {
        name: 'Tricep Extension',
        sets: 3,
        reps: 10,
        tempo: '30X1',
        rest: 90,
      },
    ]
  },
  {
    day: 18, // 5th PULL
    type: 'pull1',
    movements: [
      {
        name: 'Chinup', //still climbing
        sets: 3,
        reps: 8,
        tempo: '30X2',
        rest: 120,
        intensity: 'Regular, Tuck L, or L Sit'
      },
      {
        name: 'Bodyweight Row', // still climbing
        sets: 3,
        reps: 15,
        tempo: '20X1',
        rest: 90,
        intensity: 'Two Arms'
      },
      {
        name: 'Pelican Curl', // still climbing
        sets: 3,
        reps: 7,
        tempo: '30X1',
        rest: 90,
      },
      {
        name: 'Face Pull',
        sets: 3,
        reps: 10,
        tempo: '30X0',
        rest: 90,
      },
      {
        name: 'Ring Rollout',
        sets: 3,
        reps: 10,
        tempo: '40X0',
        rest: 90,
      },
    ]
  },
  {
    day: 19,
    type: 'legs1',
    movements: [
      {
        name: 'Back Squat',
        sets: 5,
        reps: 7,
        tempo: '20X1',
        rest: 105,
      },
      {
        name: 'Single Leg Deadlift',
        sets: 3,
        reps: 8,
        tempo: '20X1',
        rest: 90,
      },
      {
        name: 'Walking Lunge',
        sets: 3,
        reps: 12,
        tempo: '20X1',
        rest: 90,
        intensity: 'Weight Overhead',
      },
      {
        name: 'Calf Raise',
        sets: 4,
        reps: 15,
        tempo: '20X1',
        rest: 90,
        intensity: 'Weight Overhead',
      },
    ]
  },
  {
    day: 20,
    type: 'rest',
    movements: [
      {
        name: null,
        sets: null,
        reps: null,
        tempo: null,
        rest: null,
      },
    ]
  },
  {
    day: 21,  // 6th push day
    type: 'push2',
    movements: [
      {
        name: 'Ring Dip',
        sets: 4,
        reps: 8,
        tempo: '30x1',
        rest: 90,
        intensity: 'Elbows in'
      },
      {
        name: 'Shoulder Pushup',
        sets: 3,
        reps: 10,
        tempo: '30x1',
        rest: 90,
        intensity: 'Feet on Floor',
      },
      {
        name: 'Bulgarian Pushup',
        sets: 4,
        reps: 8,
        tempo: '20x1',
        rest: 90,
      },
      {
        name: 'Shoulder Shrug',
        sets: 3,
        reps: 12,
        tempo: '2s isometric',
        rest: 90,
        instensity: 'Back to wall',
      },
      {
        name: 'Tricep Dip',
        sets: 4,
        reps: 8,
        tempo: '20x1',
        rest: 90,
      },
    ]
  },
  {
    day: 22,
    type: 'pull2', // 6th PULL
    movements: [
      {
        name: 'Mantle Chinup',
        sets: 3,
        reps: 6,
        tempo: '30x2',
        rest: 90,
      },
      {
        name: 'Archer Bodyweight Row',
        sets: 3,
        reps: 8,
        tempo: '20x0',
        rest: 90,
      },
      {
        name: 'Face Pull',
        sets: 3,
        reps: 10,
        tempo: '20X0',
        rest: 90,
      },
      {
        name: 'Bodyweight Bicep Curl',
        sets: 3,
        reps: 10,
        tempo: '30x1',
        rest: 90,
      },
    ]
  },
  {
    day: 23,
    type: 'legs2',
    movements: [
      {
        name: 'Front Squat',
        sets: 3,
        reps: 10,
        tempo: '21X1',
        rest: 90,
      },
      {
        name: 'Deadlift',
        sets: 4,
        reps: 9,
        tempo: '20x1',
        rest: 90,
      },
      {
        name: 'Box Jump',
        sets: 3,
        reps: 20,
        tempo: '20x1',
        rest: 90,
      },
    ]
  },
  {
    day: 24,
    type: 'rest',
    movements: [
      {
        name: null,
        sets: null,
        reps: null,
        tempo: null,
        rest: null,
      },
    ]
  },
  {
    day: 25,  // 7th push day
    type: 'push1',
    movements: [
      {
        name: 'Ring Dip',
        sets: 4,
        reps: 8,
        tempo: '30X1',
        rest: 90,
        intensity: 'Elbows In'
      },
      {
        name: 'Archer Pushup', // still climbing
        sets: 4,
        reps: 5,
        tempo: '20X1',
        rest: 90,
        intensity: 'Alternating'
      },
      {
        name: 'Chest Fly',
        sets: 3,
        reps: 10,
        tempo: '30X1',
        rest: 90,
      },
      {
        name: 'Tricep Dip',
        sets: 3,
        reps: 10,
        tempo: '20X1',
        rest: 90,
      },
      {
        name: 'Tricep Extension',
        sets: 3,
        reps: 10,
        tempo: '30X1',
        rest: 90,
      },
    ]
  },
  {
    day: 26, // 7th PULL
    type: 'pull1',
    movements: [
      {
        name: 'Chinup', //still climbing
        sets: 4,
        reps: 6,
        tempo: '30X2',
        rest: 120,
        intensity: 'Regular, Tuck L, or L Sit'
      },
      {
        name: 'Bodyweight Row', // still climbing
        sets: 4,
        reps: 10,
        tempo: '20X1',
        rest: 90,
        intensity: 'Two Arms'
      },
      {
        name: 'Pelican Curl',
        sets: 3,
        reps: 8,
        tempo: '30X1',
        rest: 90,
      },
      {
        name: 'Face Pull',
        sets: 3,
        reps: 10,
        tempo: '30X0',
        rest: 90,
      },
      {
        name: 'Ring Rollout',
        sets: 3,
        reps: 10,
        tempo: '40X0',
        rest: 90,
      },
    ]
  },
  {
    day: 27,
    type: 'legs1',
    movements: [
      {
        name: 'Back Squat',
        sets: 5,
        reps: 8,
        tempo: '20X1',
        rest: 105,
      },
      {
        name: 'Single Leg Deadlift',
        sets: 3,
        reps: 8,
        tempo: '20X1',
        rest: 90,
      },
      {
        name: 'Walking Lunge',
        sets: 3,
        reps: 15,
        tempo: '20X1',
        rest: 90,
        intensity: 'Weight Overhead',
      },
      {
        name: 'Calf Raise',
        sets: 4,
        reps: 20,
        tempo: '20X1',
        rest: 90,
        intensity: 'Weight Overhead',
      },
    ]
  },
  {
    day: 28,
    type: 'rest',
    movements: [
      {
        name: null,
        sets: null,
        reps: null,
        tempo: null,
        rest: null,
      },
    ]
  },
  {
    day: 29,  // 8th push day
    type: 'push2',
    movements: [
      {
        name: 'Ring Dip',
        sets: 4,
        reps: 8,
        tempo: '30x1',
        rest: 90,
        intensity: 'Elbows in'
      },
      {
        name: 'Shoulder Pushup',
        sets: 4,
        reps: 8,
        tempo: '30x1',
        rest: 90,
        intensity: 'Feet on Floor',
      },
      {
        name: 'Bulgarian Pushup',
        sets: 4,
        reps: 10,
        tempo: '20x1',
        rest: 90,
      },
      {
        name: 'Shoulder Shrug',
        sets: 4,
        reps: 10,
        tempo: '2s isometric',
        rest: 90,
        instensity: 'Back to wall',
      },
      {
        name: 'Tricep Dip',
        sets: 4,
        reps: 10,
        tempo: '20x1',
        rest: 90,
      },
    ]
  },
  {
    day: 30,
    type: 'pull2', // 8th PULL
    movements: [
      {
        name: 'Mantle Chinup',
        sets: 4,
        reps: 4,
        tempo: '30x2',
        rest: 90,
      },
      {
        name: 'Archer Bodyweight Row',
        sets: 4,
        reps: 4,
        tempo: '20x0',
        rest: 90,
      },
      {
        name: 'Face Pull',
        sets: 3,
        reps: 10,
        tempo: '20X0',
        rest: 90,
      },
      {
        name: 'Bodyweight Bicep Curl',
        sets: 4,
        reps: 8,
        tempo: '30x1',
        rest: 90,
      },
    ]
  },
  {
    day: 31,
    type: 'legs2',
    movements: [
      {
        name: 'Front Squat',
        sets: 4,
        reps: 8,
        tempo: '21X1',
        rest: 90,
      },
      {
        name: 'Deadlift',
        sets: 4,
        reps: 10,
        tempo: '20x1',
        rest: 90,
      },
      {
        name: 'Box Jump',
        sets: 3,
        reps: 20,
        tempo: '20x1',
        rest: 90,
      },
    ]
  },
];

export default workOuts;
