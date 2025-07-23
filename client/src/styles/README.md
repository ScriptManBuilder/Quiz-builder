# Стили Quiz Builder

Эта папка содержит всю стилизацию для приложения Quiz Builder, организованную по компонентам и страницам.

## Структура

```
styles/
├── index.ts              # Главный файл экспорта всех стилей
├── tokens.ts             # Дизайн-токены (цвета, размеры, шрифты)
├── mixins.ts             # Переиспользуемые CSS миксины
├── shared.ts             # Общие компоненты (Button, Input, Card и т.д.)
├── Navigation.ts         # Стили для компонента Navigation
├── QuizList.ts          # Стили для страницы QuizList
├── CreateQuiz.ts        # Стили для страницы CreateQuiz
├── QuizDetail.ts        # Стили для страницы QuizDetail
└── ErrorDisplay.ts      # Стили для компонента ErrorDisplay
```

## Принципы организации

### 1. **Дизайн-токены** (`tokens.ts`)
Содержит все переменные дизайн-системы:
- Цветовая палитра
- Размеры и отступы
- Типографика
- Радиусы скругления
- Тени
- Анимации и переходы
- Точки перелома для адаптивности

### 2. **Миксины** (`mixins.ts`)
Переиспользуемые стили для:
- Центрирования контента
- Эффектов наведения
- Состояний фокуса
- Карточек с тенями
- Адаптивных сеток
- Состояний загрузки

### 3. **Общие компоненты** (`shared.ts`)
Базовые UI компоненты:
- Button, Input, Textarea, Select
- Card, Container, PageWrapper
- Title, Subtitle, Text
- Flex, Grid утилиты
- LoadingSpinner

### 4. **Компонентные стили**
Каждый компонент/страница имеет свой файл со стилями:
- Используют токены из `tokens.ts`
- Применяют миксины из `mixins.ts`
- Следуют единому стилю именования

## Использование

### Импорт в компонентах:

```typescript
// Импорт общих стилей
import { Button, Card, Flex, colors } from '../styles';

// Импорт специфичных стилей
import { NavigationStyles } from '../styles';

// Использование
<NavigationStyles.Nav>
  <Button variant="primary">Click me</Button>
</NavigationStyles.Nav>
```

### Создание новых стилей:

1. **Для нового компонента:**
   ```typescript
   // styles/NewComponent.ts
   import styled from 'styled-components';
   import { colors, spacing, borderRadius } from './tokens';
   import { cardShadow, hoverEffect } from './mixins';

   export const NewComponentWrapper = styled.div`
     ${cardShadow}
     ${hoverEffect}
     padding: ${spacing.lg};
   `;
   ```

2. **Добавить в index.ts:**
   ```typescript
   export * as NewComponentStyles from './NewComponent';
   ```

## Цветовая схема

### Основные цвета:
- **Primary**: `#3b82f6` - Основной синий
- **Secondary**: `#6b7280` - Серый
- **Success**: `#10b981` - Зеленый
- **Danger**: `#ef4444` - Красный
- **Warning**: `#f59e0b` - Оранжевый

### Нейтральные цвета:
- **White**: `#ffffff`
- **Light**: `#f8fafc`
- **Gray**: `#e5e7eb`
- **Dark**: `#1f2937`
- **Background**: `#f9fafb`

## Адаптивность

Используются следующие точки перелома:
- **sm**: 640px
- **md**: 768px  
- **lg**: 1024px
- **xl**: 1280px

Пример адаптивного стиля:
```typescript
const ResponsiveComponent = styled.div`
  padding: ${spacing.sm};
  
  @media (min-width: ${breakpoints.md}) {
    padding: ${spacing.lg};
  }
`;
```

## Лучшие практики

1. **Используйте токены** вместо хардкода значений
2. **Применяйте миксины** для повторяющихся паттернов
3. **Следуйте именованию** компонентов (ComponentNameStyles)
4. **Группируйте** связанные стили в одном файле
5. **Документируйте** сложные стили комментариями

## Примеры использования

### Базовый компонент:
```typescript
import { Button, Flex, colors } from '../styles';

const MyComponent = () => (
  <Flex justify="space-between" align="center">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
  </Flex>
);
```

### Кастомные стили:
```typescript
import styled from 'styled-components';
import { colors, spacing, borderRadius } from '../styles/tokens';

const CustomCard = styled.div`
  background: ${colors.white};
  padding: ${spacing.lg};
  border-radius: ${borderRadius.lg};
  border: 1px solid ${colors.border};
`;
```

### Использование стилей компонента:
```typescript
import { NavigationStyles } from '../styles';

const Navigation = () => (
  <NavigationStyles.Nav>
    <NavigationStyles.NavContainer>
      <NavigationStyles.Logo>Logo</NavigationStyles.Logo>
    </NavigationStyles.NavContainer>
  </NavigationStyles.Nav>
);
```
