import React from 'react';

// вывод простых данных.

/*
export const StringDisplay = () => {
  const greeting = "Привет, React!";
  const userName = "Иван";
  const userEmail = "EmaIlForUsEr@MaiL.Ru"
  
  return (
    <div>
      <h1>{greeting}</h1>
      <p>Пользователь: {userName}</p>
      <p>Длина имени: {userName.length} символов</p>
      <p>Email пользователя: {userEmail.toLowerCase()}</p>
    </div>
  );
};
*/

// Калькулятор. 

/*
export const Calculator = () => {
  const a = 15;
  const b = 7;
  
  return (
    <div>
      <h2>Калькулятор</h2>
      <p>{a} + {b} = {a + b}</p>
      <p>{a} * {b} = {a * b}</p>
      <p>Среднее: {(a + b) / 2}</p>
      <p>Остаток от деления: {a % b}</p>
      <p>Случайное число: {Math.random()}</p>
      <p>Степень: {Math.pow(a,b)}</p>
      <p>округление: {Math.round()}</p>
      <p>минимальное значение: {Math.min(a,b)} </p>
      <p>максимальное значение: {Math.max(a,b)} </p>
    </div>
  );
};
*/

// BooleanDisplay.jsx.

/*
export const BooleanDisplay = () => {
  const isLoggedIn = true;
  const hasPermission = false;
  const score = 85;
  const hour = new Date().getHours();
  const getHours = () => {
    if (hour >= 5 && hour < 12) {
      return "Доброе утро!";
    } else if (hour >= 12 && hour < 18) {
      return "Добрый день!";
    } else if (hour >= 18 && hour < 22) {
      return "Добрый вечер!";
    } else {
      return "Доброй ночи!";
    }
  };
  
  return (
    <div>
      <h2>Статусы</h2>
      <p>Вход выполнен: {isLoggedIn ? "✅ Да" : "❌ Нет"}</p>
      <p>Есть доступ: {hasPermission && "🔓 Разрешено"}</p>
      <p>Оценка: {score > 90 ? "Отлично" : score > 60 ? "Хорошо" : "Плохо"}</p>
      <p>{getHours()}</p>
    </div>
  );
};
*/

//Задача: Добавить проверку времени суток и менять приветствие.

//Задание 2.1: Списки из массива

// UserList.jsx
/*
export const UserList = () => {
  const users = ["Анна", "Борис", "Виктор", "Дарья"];
  const numbers = [1, 2, 3, 4, 5];
  const sumNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
  return (
    <div>
      <h2>Список пользователей</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user} - индекс {index}</li>
        ))}
      </ul>
      
      <h3>Фильтрованный список (буква А)</h3>
      <ul>
        {users.filter(user => user.includes('А')).map(user => (
          <li>{user}</li>
        ))}
      </ul>
        <h3>Сумма чисел массива</h3>
        <ul>
        {sumNumbers}
        </ul>
    </div>
  );
};

//*Задача** Добавить вывод суммы чисел массива `numbers`.
*/

//#### **Задание 2.2: Объекты и деструктуризация**

// StudentCard.jsx
/*
export const StudentCard = () => {
  const student = {
    name: "Мария",
    age: 20,
    group: "ПИ-202",
    subjects: ["Математика", "Программирование", "Физика"],
    address: {
      city: "Москва",
      street: "Ленина"
    }
  };
  
  // Деструктуризация
  const { name, age, group, subjects, address: {city,street} } = student;
  const [mainSubject, ...otherSubjects] = student.subjects;
  
  return (
    <div>
      <h2>Карточка студента</h2>
      <p>Имя: {name}</p>
      <p>Возраст: {age}</p>
      <p>Группа: {group}</p>
      <p>Город: {city}</p>
      <p>Улица: {street}</p>
      <p>Основной предмет: {mainSubject}</p>
      <p>Другие предметы: {otherSubjects.join(', ')}</p>
    </div>
  );
};
*/

///**Задача** Добавить вложенную деструктуризацию для адреса.

//#### **Задание 3.1: Простые функции**

/*
// FunctionDemo.jsx
export const FunctionDemo = () => {
  // Функция внутри компонента
  const formatDate = () => {
    return new Date().toLocaleDateString();
  };
  
  const calculateDiscount = (price, percent) => {
    return price - (price * percent / 100);
  };

  const formatName = (name) => {
    return name.at(0).toUpperCase() + name.slice(1).toLowerCase();
  }
  
  return (
    <div>
      <h2>Демо функций</h2>
      <p>Сегодня: {formatDate()}</p>
      <p>Скидка на 1000 руб: {calculateDiscount(1000, 15)} руб</p>
      <p>{formatName("мАрИя")}</p>
      <p>{formatName("СЕНЯ")}</p>
    </div>
  );
};
*/

//**Задача** Создать функцию для форматирования имени 
// (первая буква заглавная).

//#### **Задание 3.2: Обработчики событий**

// EventHandlers.jsx
import { useState } from 'react';

export const EventHandlers = () => {
  const [text, setText] = useState('');
  const [counter, setCounter] = useState(0);
  
  const handleClick = () => {
    setCounter(counter + 1);
  };
  
  const handleInputChange = (event) => {
    setText(event.target.value);
  };
  
  const handleReset = () => {
    setText('');
    setCounter(0);
  };

  const handleReverseText = () => {
    const reversedText = text.split("").reverse().join('');
    setText(reversedText);
  }
  
  return (
    <div>
      <h2>Обработчики событий</h2>
      
      <div>
        <input 
          type="text" 
          value={text}
          onChange={handleInputChange}
          placeholder="Введите текст..."
        />
        <p>Вы ввели: {text}</p>
        <p>Длина: {text.length}</p>
        <button onClick={handleReverseText} disabled={!text.trim()}></button>
      </div>
      
      <div>
        <button onClick={handleClick}>
          Нажато: {counter} раз
        </button>
        <button onClick={handleReset}>
          Сбросить
        </button>
      </div>
    </div>
  );
};

//**Задача:** Добавить кнопку для обращения текста.