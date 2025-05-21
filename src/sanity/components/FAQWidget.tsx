import React, { useEffect, useState } from 'react'
import { Box, Card, Flex, Spinner, Stack, Text } from '@sanity/ui'
import { IoChevronDown } from 'react-icons/io5'
import { useClient } from 'sanity'

interface FAQItem {
  _key: string
  question: string
  answer: any
}

interface FAQ {
  _id: string
  title: string
  description?: string
  questions: FAQItem[]
}

export function FAQWidget() {
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [loading, setLoading] = useState(true)
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const client = useClient({ apiVersion: '2023-01-01' })

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const result = await client.fetch(`
          *[_type == "faq"] {
            _id,
            title,
            description,
            questions[] {
              _key,
              question,
              answer
            }
          }
        `)
        setFaqs(result)
      } catch (error) {
        console.error('Error fetching FAQs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFAQs()
  }, [client])

  const toggleItem = (faqId: string, itemKey: string) => {
    setExpandedItems((prev) => {
      const composite = `${faqId}-${itemKey}`
      const next = new Set(prev)
      if (next.has(composite)) {
        next.delete(composite)
      } else {
        next.add(composite)
      }
      return next
    })
  }

  if (loading) {
    return (
      <Card padding={4}>
        <Flex justify="center" align="center" height="fill">
          <Spinner />
        </Flex>
      </Card>
    )
  }

  if (faqs.length === 0) {
    return (
      <Card padding={4}>
        <Text>No FAQs found. Create your first FAQ to see it here.</Text>
      </Card>
    )
  }

  return (
    <Card padding={4}>
      <Stack space={4}>
        <Text size={2} weight="semibold">
          Frequently Asked Questions
        </Text>
        {faqs.map((faq) => (
          <Card key={faq._id} padding={3} radius={2} shadow={1}>
            <Stack space={3}>
              <Text size={2} weight="semibold">
                {faq.title}
              </Text>
              {faq.description && (
                <Text size={1} muted>
                  {faq.description}
                </Text>
              )}
              <Stack space={2} marginTop={2}>
                {faq.questions.map((item) => {
                  const isExpanded = expandedItems.has(`${faq._id}-${item._key}`)
                  return (
                    <Card key={item._key} padding={3} radius={1} tone="primary">
                      <Stack space={2}>
                        <Flex align="center" justify="space-between">
                          <Text size={1} weight="medium">
                            {item.question}
                          </Text>
                          <Box
                            style={{ cursor: 'pointer' }}
                            onClick={() => toggleItem(faq._id, item._key)}
                          >
                            <IoChevronDown
                              style={{
                                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)',
                                transition: 'transform 0.3s ease',
                              }}
                            />
                          </Box>
                        </Flex>
                        {isExpanded && (
                          <Box marginTop={2}>
                            <Text size={1}>
                              {Array.isArray(item.answer) ? (
                                item.answer.map((block: any, i: number) => (
                                  <React.Fragment key={i}>
                                    {block.children?.map((child: any, j: number) => (
                                      <span key={j}>{child.text}</span>
                                    ))}
                                  </React.Fragment>
                                ))
                              ) : (
                                <span>No answer content</span>
                              )}
                            </Text>
                          </Box>
                        )}
                      </Stack>
                    </Card>
                  )
                })}
              </Stack>
            </Stack>
          </Card>
        ))}
      </Stack>
    </Card>
  )
} 