import { IconBrandFacebook, IconBrandGit, IconBrandX } from '@tabler/icons-react';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import { useState } from 'react';

export default function AppTodo() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  //   const handleChange = (e) => {
  //     setNewTask(e.target.value);
  //   };

  function handlerAddTask(e) {
    e.preventDefault();
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Math.floor(Math.random() * Date.now()),
        name: newTask,
        complated: false,
      },
    ]);
    setNewTask('');
  }

  function handlerCompleteTask(id) {
    const updateTask = tasks.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          complated: !task.complated,
        };
      }

      return task;
    });
    setTasks(updateTask);
  }

  function handlerRemoveTask(id) {
    const removeTask = tasks.filter((task) => task.id !== id);
    setTasks(removeTask);
  }

  return (
    <div className='bg-slate-100 antialiased flex items-center justify-center min-h-screen'>
      <div className='max-w-md w-full'>
        <Card>
          <Card.Title>ToDo!</Card.Title>
          <Card.Body>
            <form>
              <div className='flex items-center gap-x-2 mb-5'>
                {/* <Input value={newTask} onChange={handleChange} /> */}
                <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                <Button onClick={handlerAddTask} text={'Add'} />
              </div>
            </form>
            <div className='mb-5 border rounded-lg p-4'>
              {tasks.length > 0 ? (
                <ol className='space-y-2'>
                  {tasks.map((task) => (
                    <li key={task.id} className='flex items-center justify-between'>
                      <span>
                        {task.name} {task.complated ? '✔️' : '✖️'}
                      </span>
                      <div className='flex items-center gap-x-2'>
                        <button onClick={() => handlerCompleteTask(task.id)} className='text-xs border rounded p-2 mr-2'>
                          Mark as {task.complated ? 'complete' : 'incomplete'}
                        </button>
                        <button onClick={() => handlerRemoveTask(task.id)} className='text-xs border rounded p-2'>
                          remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ol>
              ) : null}
            </div>
          </Card.Body>
          <Card.Footer>You Have {tasks.length} Task</Card.Footer>
        </Card>
      </div>
    </div>
  );
}
