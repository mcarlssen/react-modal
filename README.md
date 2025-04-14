# @mcarlssen/react-modal

A simple, accessible, and highly customizable React modal-popup component.

## ✨ Features

- **Fully Customizable**: Style every aspect with CSS variables and props
- **Smooth Animations**: Built-in fade and slide animations
- **Keyboard Support**: Escape key to close
- **Click Outside**: Close by clicking the overlay
- **Responsive**: Works great on all screen sizes
- **Print-Friendly**: Special styles for printing
- **Accessible**: ARIA labels and keyboard navigation
- **Body Scroll Lock**: Prevents background scrolling
- **TypeScript Support**: Full type definitions

## 📦 Installation

```bash
npm install @mcarlssen/react-modal
# or
yarn add @mcarlssen/react-modal
```

## 🚀 Basic Usage

```tsx
import React, { useState } from 'react';
import Modal from '@mcarlssen/react-modal';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="My Modal"
      >
        <p>Modal content goes here</p>
      </Modal>
    </div>
  );
};
```

## 🔧 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | boolean | - | Controls modal visibility |
| `onClose` | () => void | - | Callback when modal closes |
| `children` | React.ReactNode | - | Modal content |
| `title` | string | - | Modal title |
| `closeOnOutsideClick` | boolean | true | Close when clicking outside |
| `closeOnEscape` | boolean | true | Close when pressing escape |
| `overlayClassName` | string | '' | Custom overlay class |
| `contentClassName` | string | '' | Custom content class |
| `headerClassName` | string | '' | Custom header class |
| `titleClassName` | string | '' | Custom title class |
| `closeButtonClassName` | string | '' | Custom close button class |
| `overlayStyle` | React.CSSProperties | - | Custom overlay styles |
| `contentStyle` | React.CSSProperties | - | Custom content styles |
| `headerStyle` | React.CSSProperties | - | Custom header styles |
| `titleStyle` | React.CSSProperties | - | Custom title styles |
| `closeButtonStyle` | React.CSSProperties | - | Custom close button styles |
| `closeButtonContent` | React.ReactNode | '×' | Custom close button content |
| `showCloseButton` | boolean | true | Show/hide close button |
| `animationDuration` | number | 300 | Animation duration in ms |
| `disableBodyScroll` | boolean | true | Prevent background scrolling |

## 🎨 Styling

### CSS Variables

Customize the appearance using CSS variables:

```css
:root {
  --modal-bg: #2a2a2a;
  --modal-border: #3a3a3a;
  --modal-text: #ddd;
}
```

### Custom Classes

Add your own classes to any part of the modal:

```tsx
<Modal
  overlayClassName="my-custom-overlay"
  contentClassName="my-custom-content"
  headerClassName="my-custom-header"
  titleClassName="my-custom-title"
  closeButtonClassName="my-custom-close"
>
  {/* content */}
</Modal>
```

### Inline Styles

Apply custom styles directly:

```tsx
<Modal
  overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
  contentStyle={{ maxWidth: '500px' }}
  headerStyle={{ borderBottom: '1px solid #ccc' }}
  titleStyle={{ color: '#ff0000' }}
  closeButtonStyle={{ color: '#ff0000' }}
>
  {/* content */}
</Modal>
```

## 🎯 Advanced Usage

### Custom Close Button

```tsx
<Modal
  closeButtonContent={<span>Close</span>}
  closeButtonStyle={{ color: 'red' }}
>
  <p>Modal with custom close button</p>
</Modal>
```

### Disable Outside Click

```tsx
<Modal
  closeOnOutsideClick={false}
>
  <p>Modal that can only be closed with the close button or escape key</p>
</Modal>
```

### Custom Animation Duration

```tsx
<Modal
  animationDuration={500} // 500ms animation
>
  <p>Modal with slower animations</p>
</Modal>
```

### Disable Body Scroll Lock

```tsx
<Modal
  disableBodyScroll={false}
>
  <p>Modal that allows background scrolling</p>
</Modal>
```

## 🔍 Accessibility

The modal library includes full accessibility support:

- Proper ARIA labels
- Keyboard navigation support
- Focus management
- Semantic HTML structure
- Screen reader friendly

## 📱 Responsive Design

The modal is fully responsive and works well on all screen sizes:

- Mobile-friendly
- Adjusts to viewport size
- Scrollable content
- Proper spacing on small screens

## 🖨️ Print Styles

Special print styles ensure the modal looks good when printed:

- Removes overlay
- Adjusts borders and shadows
- Maintains readability
- Preserves content structure

## 🛠️ Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Run tests
npm test

# Lint code
npm run lint
```

## 📝 License

MIT © [Magnus Carlssen](https://github.com/mcarlssen)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a PR.  