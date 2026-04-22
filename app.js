const { useState, useEffect } = React;

function FitLifeHub() {
  const [foods, setFoods] = useState(JSON.parse(localStorage.getItem('foods')) || []);
  const [workouts, setWorkouts] = useState(JSON.parse(localStorage.getItem('workouts')) || []);
  const [weights, setWeights] = useState(JSON.parse(localStorage.getItem('weights')) || []);

  const [foodName, setFoodName] = useState("");
  const [calories, setCalories] = useState("");
  const [workout, setWorkout] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");

  useEffect(() => {
    localStorage.setItem('foods', JSON.stringify(foods));
    localStorage.setItem('workouts', JSON.stringify(workouts));
    localStorage.setItem('weights', JSON.stringify(weights));
  }, [foods, workouts, weights]);

  const addFood = () => {
    if (!foodName || !calories) return;
    setFoods([...foods, { foodName, calories: parseInt(calories) }]);
    setFoodName("");
    setCalories("");
  };

  const totalCalories = foods.reduce((sum, f) => sum + f.calories, 0);

  const addWorkout = () => {
    if (!workout) return;
    setWorkouts([...workouts, workout]);
    setWorkout("");
  };

  const calculateBMI = () => {
    if (!weight || !height) return;
    const h = height / 100;
    const value = (weight / (h * h)).toFixed(2);
    setBmi(value);
  };

  const addWeight = () => {
    if (!weight) return;
    setWeights([...weights, weight]);
    setWeight("");
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">💪 FitLife Hub</h1>

      <div className="bg-gray-800 p-4 mb-4 card">
        <h2>🥗 Calorie Tracker</h2>
        <input value={foodName} onChange={e=>setFoodName(e.target.value)} placeholder="Food" className="w-full p-2 text-black mb-2"/>
        <input value={calories} onChange={e=>setCalories(e.target.value)} placeholder="Calories" className="w-full p-2 text-black mb-2"/>
        <button onClick={addFood} className="bg-green-500 px-3 py-1">Add</button>
        <p>Total: {totalCalories}</p>
      </div>

      <div className="bg-gray-800 p-4 mb-4 card">
        <h2>🏋️ Workout</h2>
        <input value={workout} onChange={e=>setWorkout(e.target.value)} placeholder="Workout" className="w-full p-2 text-black mb-2"/>
        <button onClick={addWorkout} className="bg-blue-500 px-3 py-1">Add</button>
      </div>

      <div className="bg-gray-800 p-4 mb-4 card">
        <h2>📊 BMI</h2>
        <input value={weight} onChange={e=>setWeight(e.target.value)} placeholder="Weight" className="w-full p-2 text-black mb-2"/>
        <input value={height} onChange={e=>setHeight(e.target.value)} placeholder="Height" className="w-full p-2 text-black mb-2"/>
        <button onClick={calculateBMI} className="bg-purple-500 px-3 py-1">Calculate</button>
        <p>{bmi && `BMI: ${bmi}`}</p>
      </div>

      <div className="bg-gray-800 p-4 card">
        <h2>📈 Progress</h2>
        <input value={weight} onChange={e=>setWeight(e.target.value)} placeholder="Weight" className="w-full p-2 text-black mb-2"/>
        <button onClick={addWeight} className="bg-yellow-500 px-3 py-1">Add</button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<FitLifeHub />);
