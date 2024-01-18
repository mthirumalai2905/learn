import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { title: 'Watching Netflix', description: 'Stranger Things' },
    { title: 'Working on React Project', description: 'Build a portfolio website' },
    { title: 'Learning New Recipe', description: 'Cooking spaghetti carbonara' },
    { title: 'Reading Book', description: 'The Hitchhiker\'s Guide to the Galaxy' },
    { title: 'Exercising', description: '30 minutes of yoga' },
    { title: 'Writing Journal', description: 'Reflect on the day and set goals' },
    { title: 'Calling a Friend', description: 'Catch up with Alex' },
    { title: 'Shopping', description: 'Grocery shopping for the week' },
    { title: 'Listening to Podcast', description: 'Tech Talks with John Doe' },
    { title: 'Gardening', description: 'Planting new flowers in the backyard' },
    { title: 'Coding Challenge', description: 'Solve a coding problem on LeetCode' },
    { title: 'Creating Artwork', description: 'Painting a landscape' },
    { title: 'Learning a New Language', description: 'Spanish vocabulary practice' },
    { title: 'Volunteering', description: 'Helping at a local community event' },
    { title: 'Movie Night', description: 'Watch a classic movie with popcorn' },
    { title: 'DIY Project', description: 'Building a bookshelf' },
    { title: 'Baking', description: 'Making chocolate chip cookies' },
    { title: 'Photography', description: 'Capture beautiful moments in the city' },
    { title: 'Writing Blog Post', description: 'Share insights on web development' },
    { title: 'Online Course', description: 'Enroll in a course on machine learning' },
    { title: 'Music Practice', description: 'Play the guitar for 30 minutes' },
    { title: 'Virtual Coffee Chat', description: 'Connect with a colleague over a virtual coffee' },
    { title: 'Tech Meetup', description: 'Attend a local tech meetup event' },
    { title: 'Visit Art Gallery', description: 'Explore the latest art exhibitions' },
    { title: 'Family Time', description: 'Have a board game night with family' },
  ]);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const addTask = () => {
    if (taskTitle.trim() !== '') {
      setTasks([...tasks, { title: taskTitle, description: taskDescription }]);
      setTaskTitle('');
      setTaskDescription('');
    }
  };

  return (
    <div>
      <div className='container'>
        <h1>To-Do List</h1>
        <div className='to-do-box'>
          <div>
            <input
              type="text"
              placeholder="Task Title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Task Description"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>
          </div>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                <strong>{task.title}</strong>: {task.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
