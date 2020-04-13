import React from 'react';
import Page from './Page';

export default function PageContainer() {
  return (
    <div>
      <navigator>
        <button>
          To do
        </button>
        <button>
          Meta data
        </button>
      </navigator>
      <Page />
    </div>
  )
}
