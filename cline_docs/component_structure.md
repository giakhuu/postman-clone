# Component Structure

This document outlines the component hierarchy and organization within the MyProject application, following the Atomic Design methodology.

## Atomic Design Pattern

The project follows the Atomic Design methodology, which breaks down the interface into five distinct levels:

1. **Atoms**: Basic UI components (referred to as "ui" in this project)
2. **Molecules**: Simple combinations of atoms
3. **Organisms**: Complex UI components composed of molecules and atoms
4. **Templates**: Page-level component arrangements (handled via layouts)
5. **Pages**: Specific instances of templates (handled via app directory)

## Component Hierarchy

```
components/
├── ui/                  # Basic UI components (atoms)
│   ├── Button.tsx       # Button component
│   ├── Divider.tsx      # Divider component
│   ├── Icon.tsx         # Icon component
│   ├── Text.tsx         # Text component
│   └── index.tsx        # Exports all UI components
│
├── molecules/           # Reusable component combinations (molecules)
│   ├── CollectionDrawer/       # Collection drawer related components
│   │   ├── CollectionItem.tsx  # Individual collection item
│   │   ├── CollectionList.tsx  # List of collections
│   │   ├── FolderItem.tsx      # Individual folder item
│   │   └── RequestItem.tsx     # Individual request item
│   │
│   ├── CustomButton/           # Custom button variations
│   │   └── ...                 # (custom button components)
│   │
│   ├── Request/                # Request-related components
│   │   └── Tag.tsx             # Tag component for requests
│   │
│   └── Tips/                   # Tip-related components
│       └── QuickTip.tsx        # Quick tip component
│
├── organism/            # Larger, more complex components (organisms)
│   └── (components to be added)
│
├── layout/              # Page layout components (templates)
│   ├── CustomDrawerContent.tsx # Custom drawer content
│   ├── HeaderRight.tsx  # Header right component
│   └── index.tsx        # Main layout exports
│
└── AppStack.tsx         # Main app navigation stack
```

## Key Component Relationships

### Navigation Structure

- **AppStack.tsx**: Defines the main navigation structure
- **CustomDrawerContent.tsx**: Customizes the drawer navigation content
  - Uses `CollectionList` to display collections
  - Uses `NavButton` component for navigation items

### Collection Management

- **CollectionList.tsx**: Renders a list of collections
  - Uses `CollectionItem` for each collection
- **CollectionItem.tsx**: Renders a single collection
  - Uses `FolderItem` for each folder in the collection
  - Uses `RequestItem` for direct requests in the collection
- **FolderItem.tsx**: Renders a single folder
  - Uses `RequestItem` for each request in the folder
- **RequestItem.tsx**: Renders a single request

### Other Molecules
- **CustomButton/**: Contains custom button variations for specific use-cases
- **Request/Tag.tsx**: Tag component for displaying HTTP method tags (GET, POST, etc.)
- **Tips/QuickTip.tsx**: Component for showing quick tips to the user

## Component Props and Data Flow

### CustomDrawerContent

```typescript
type NavItem = {
  label: string;
  iconName: IconProps['name'];
  routeName: string;
}

type NavButtonProps = {
  label: string;
  iconName: IconProps['name'];
  onPress: () => void;
}

// Sample data structure for collections
const sampleCollections = [
  {
    id: '1',
    name: 'My first collection',
    folders: [
      {
        id: 'f1',
        name: 'First folder inside collection',
        requests: [
          { id: 'r1', name: 'Request 1', method: 'GET' },
          { id: 'r2', name: 'Request 2', method: 'POST' },
        ],
      },
      // ...more folders
    ],
  },
  // ...more collections
]
```

### CollectionList

```typescript
type CollectionListProps = {
  collections: Collection[];
}
```

### UI Components

- **Button.tsx**: Configurable button with variants (primary, secondary, ghost)
- **Icon.tsx**: Icon component using vector icons
- **Text.tsx**: Text component with styling options
- **Divider.tsx**: Line divider component

## Styling Approach

Components are styled using NativeWind (Tailwind CSS for React Native) with className props:

```tsx
<Text className='text-3xl font-bold px-4'>{tCommon("appName")}</Text>
```

## Theming

The application uses a theme system with hooks:

```tsx
// Example of theme usage
const colors = useThemeColors();
```

## Internationalization

Components use react-i18next for translations:

```tsx
const { t: tDrawer } = useTranslation('drawer');
const { t: tCommon } = useTranslation('common');
```

## Directory Summary

- **components/ui/**: Atoms (Button, Divider, Icon, Text, ...)
- **components/molecules/**: Molecules (CollectionDrawer, CustomButton, Request/Tag, Tips/QuickTip, ...)
- **components/organism/**: Organisms (to be added)
- **components/layout/**: Templates (CustomDrawerContent, HeaderRight, ...)
- **app/**: Pages (via app directory, e.g. app/(drawer)/home/index.tsx)
- **cline_docs/**: Documentation (component_structure.md, project_overview.md, ...)

## Notes
- The structure is designed for scalability and maintainability.
- Each level (atom, molecule, organism, template, page) is clearly separated.
- Folders like `CustomButton`, `Request`, `Tips` under molecules are for grouping related molecule components.
- The `organism/` folder is ready for more complex, composite components as the app grows.
- Layouts and navigation are handled in `layout/` and `AppStack.tsx`.
