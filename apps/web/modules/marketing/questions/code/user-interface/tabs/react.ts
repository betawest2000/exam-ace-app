import type { UIQuestionCodeData } from "@marketing/questions/types";
import { INDEX_HTML, REACT_INDEX_JS, STYLE_CLASS } from "../shared/code";

const starterTabsJs = `export default function Tabs({ items }) {
return (
    <div className="tabs">
      <div className="tabs-list">
        {items.map(({ label }, index) => {
          return (
            <button key={'item' + index} type="button"> {label}</button>
          );
        })}
      </div>
      <div>
        {items.map(({ panel }, index) => (
          <p key={'itemValue' + index}>
            {panel}
          </p>
        ))}
      </div>
    </div>
  );
}`;

const solutionStylesCss = `body {
  font-family: sans-serif;
}

.wrapper {
  align-items: center;
  display: flex;
}

.tabs {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tabs-list {
  display: flex;
  gap: 6px;
}

.tabs-list-item {
  --active-color:  blueviolet;

  background: none;
  border: 1px solid  #000;
  border-radius: 4px;
  cursor: pointer;
  padding: 6px 10px;
}

.tabs-list-item:hover {
  border-color: var(--active-color);
  color: var(--active-color);
}

.tabs-list-item--active,
.tabs-list-item--active:hover {
  border-color: var(--active-color);
  background-color: var(--active-color);
  color:  #fff;
}`;

const solutionTabsJs = `import { useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Tabs({ items }) {
  const [value, setValue] = useState(0);

  return (
    <div className="tabs">
      <div className="tabs-list">
        {items.map(({ label }, index) => {
          const isActiveValue = index === value;

          return (
            <button
              key={'item' + index}
              type="button"
              className={
                classNames(
                  'tabs-list-item',
                  isActiveValue && 'tabs-list-item--active'
                )
              }
              onClick={() => setValue(index)}>
              {label}
            </button>
          );
        })}
      </div>
      <div>
        {items.map(({ panel }, index) => (
          <div key={'itemValue' + index} hidden={index !== value}>
            {panel}
          </div>
        ))}
      </div>
    </div>
  );
}`;

const appJs = `import Tabs from './Tabs';

import './styles.css';

export default function App() {
  return (
    <div className="wrapper">
      <Tabs
        items={[
          {
            label: 'Profile',
            panel:
              'User Profiles.',
          },
          {
            label: 'Subscription',
            panel:
              'Your current subscription.',
          },
          {
            label: 'Setting',
            panel:
              'System Settings.',
          },
        ]}
      />
    </div>
  );
}`;
export const starter = {
	"/Tabs.js": starterTabsJs,
	"/App.js": appJs,
	"/index.js": REACT_INDEX_JS,
	"/styles.css": STYLE_CLASS,
	"/index.html": INDEX_HTML,
} as Record<string, string>;

export const solution = {
	"/Tabs.js": solutionTabsJs,
	"/App.js": appJs,
	"/index.js": REACT_INDEX_JS,
	"/styles.css": solutionStylesCss,
	"/index.html": INDEX_HTML,
};

const code = {
	starter,
	solution,
} as UIQuestionCodeData;

export default code;
