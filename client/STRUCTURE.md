# Quiz Builder - Структура проекта

## 📁 Полная структура папок

```
src/
├── components/              # Переиспользуемые компоненты
│   ├── Navigation/         # Компонент навигации
│   │   └── Navigation.tsx
│   ├── ErrorDisplay/       # Компонент отображения ошибок
│   │   └── ErrorDisplay.tsx
│   └── index.ts           # Экспорт компонентов
│
├── pages/                  # Страницы приложения
│   ├── QuizList.tsx       # Список всех квизов
│   ├── CreateQuiz.tsx     # Создание нового квиза
│   ├── QuizDetail.tsx     # Детальный просмотр квиза
│   └── index.ts           # Экспорт страниц
│
├── services/               # API и бизнес-логика
│   ├── quizService.ts     # Сервис для работы с квизами
│   └── index.ts           # Экспорт сервисов
│
├── types/                  # TypeScript типы
│   └── index.ts           # Определения типов для Quiz, Question и т.д.
│
├── styles/                 # Стили, организованные по компонентам
│   ├── tokens.ts          # Дизайн-токены (цвета, размеры, шрифты)
│   ├── mixins.ts          # Переиспользуемые CSS миксины
│   ├── shared.ts          # Общие компоненты (Button, Input, Card)
│   ├── Navigation.ts      # Стили для навигации
│   ├── QuizList.ts        # Стили для списка квизов
│   ├── CreateQuiz.ts      # Стили для создания квиза
│   ├── QuizDetail.ts      # Стили для детального просмотра
│   ├── ErrorDisplay.ts    # Стили для отображения ошибок
│   ├── README.md          # Документация по стилям
│   └── index.ts           # Экспорт всех стилей
│
├── App.tsx                 # Главный компонент с роутингом
├── App.css                 # Базовые глобальные стили
├── index.tsx              # Точка входа в приложение
└── index.css              # Глобальные стили
```

## 🎨 Система стилей

### Организация по принципу разделения ответственности:

1. **tokens.ts** - Переменные дизайн-системы
2. **mixins.ts** - Переиспользуемые CSS паттерны
3. **shared.ts** - Базовые UI компоненты
4. **[Component].ts** - Специфичные стили для каждого компонента

### Преимущества такой организации:

✅ **Модульность** - каждый компонент имеет свои стили
✅ **Переиспользование** - общие стили в shared.ts и mixins.ts
✅ **Консистентность** - все цвета и размеры в tokens.ts
✅ **Типизация** - TypeScript для всех стилей
✅ **Легкость поддержки** - понятная структура

## 🔧 Технические особенности

### Используемые технологии:
- **styled-components** для стилизации
- **TypeScript** для типизации
- **React Hook Form + Zod** для форм
- **React Router** для навигации
- **Axios** для API запросов

### Принципы именования:
- Компоненты: `PascalCase`
- Стили: `ComponentNameStyles.ElementName`
- Переменные: `camelCase`
- Файлы: `PascalCase.tsx` или `camelCase.ts`

## 📝 Примеры использования

### Импорт стилей:
```typescript
// Общие стили
import { Button, Card, Flex } from '../styles';

// Специфичные стили компонента
import { QuizListStyles } from '../styles';

// Использование
<QuizListStyles.QuizCard>
  <Button variant="primary">Click me</Button>
</QuizListStyles.QuizCard>
```

### Создание нового компонента:
```typescript
// 1. Создать файл стилей: styles/NewComponent.ts
export const NewComponentWrapper = styled.div`
  // стили здесь
`;

// 2. Добавить в styles/index.ts
export * as NewComponentStyles from './NewComponent';

// 3. Использовать в компоненте
import { NewComponentStyles } from '../styles';
```

## 🚀 Готовые функции

### ✅ Реализовано:
- [x] Список всех квизов с пагинацией
- [x] Создание квизов с 3 типами вопросов
- [x] Детальный просмотр квиза
- [x] Удаление квизов
- [x] Адаптивный дизайн
- [x] Обработка ошибок и состояний загрузки
- [x] Валидация форм
- [x] TypeScript типизация
- [x] Организованная система стилей

### 📋 Типы вопросов:
1. **Boolean** - True/False вопросы
2. **Input** - Текстовые ответы
3. **Checkbox** - Множественный выбор

### 🎯 Готово к интеграции с бэкендом!

Приложение ожидает API на `http://localhost:3001` со следующими эндпоинтами:
- `GET /quizzes` - получить все квизы
- `GET /quizzes/:id` - получить квиз по ID
- `POST /quizzes` - создать новый квиз
- `DELETE /quizzes/:id` - удалить квиз
