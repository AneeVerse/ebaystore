import React from 'react'
import { definePlugin } from 'sanity'
import { FAQWidget } from '../components/FAQWidget'

export const faqDashboardPlugin = definePlugin({
  name: 'faq-dashboard-widget',
  studio: {
    components: {
      layout: (props) => {
        const { renderDefault } = props
        return (
          <>
            {renderDefault(props)}
            <div
              style={{
                position: 'fixed',
                bottom: 0,
                right: 0,
                width: '320px',
                maxHeight: '500px',
                overflowY: 'auto',
                background: 'white',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                borderTopLeftRadius: '8px',
                zIndex: 10,
              }}
            >
              <FAQWidget />
            </div>
          </>
        )
      },
    },
  },
}) 