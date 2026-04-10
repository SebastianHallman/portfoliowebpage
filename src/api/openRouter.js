import { projectsData } from '../data/projectsData'
import { workExperienceData } from '../data/workExperienceData'

const projectContext = projectsData
  .map(p => {
    const links = Object.entries(p.links || {})
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`)
      .join(', ')
    return [
      `ID: ${p.id}`,
      `Title: ${p.title}`,
      `Subtitle: ${p.subtitle}`,
      `Tech: ${p.tech.join(', ')}`,
      p.collaborators?.length ? `Collaborators: ${p.collaborators.join(', ')}` : null,
      `Short description: ${p.descriptionShort}`,
      `Full description: ${p.descriptionLong}`,
      links ? `Links: ${links}` : null,
    ]
      .filter(Boolean)
      .join('\n')
  })
  .join('\n\n---\n\n')

const workContext = workExperienceData
  .map(w => `Company: ${w.company}\nRole: ${w.role}\nDates: ${w.dates}\nDescription: ${w.description}`)
  .join('\n\n---\n\n')

const SYSTEM_PROMPT = `You are Sebastian Hällman's personal portfolio assistant, embedded on sebastianhallman.com.

Sebastian is a Swedish developer and media technologist with an M.Sc. in Media Technology from KTH Royal Institute of Technology. He builds dynamic, accessible web experiences and enjoys tackling unfamiliar problems. His main tools are JavaScript, HTML, CSS, React, Vue, and Node.js — but his background spans Unity, Flutter, Firebase, Python, PHP, MySQL, WordPress, and video editing.

His portfolio is a one page app. The main sections are: About, Projects, Experience, Contact.

== PROJECTS (use ONLY this data — do not invent details) ==

${projectContext}

== WORK EXPERIENCE ==

${workContext}

== CONTACT ==
- LinkedIn: button on the website contact section
- GitHub: github.com/sebastianhallman
- No public email listed — direct people to the contact section

== YOUR ROLE ==
Answer questions from visitors who want to learn more about Sebastian, his skills, projects, or background. Be friendly, conversational, and concise. If a visitor expresses interest in working with Sebastian or hiring him, encourage them to reach out via the contact section. If you don't know something specific, be honest — never invent information.

Speak in whatever language the visitor uses. Keep responses short and to the point unless a detailed explanation is asked for. Do not use markdown. Do not invent project details, technologies, or links that are not listed above.

== RESPONSE FORMAT (REQUIRED) ==
You MUST always respond with a JSON object in this exact format:
{"message": "your plain text response here", "projectIds": ["id1", "id2"], "showContact": false}

- "message": your response as plain text (no markdown)
- "projectIds": an array of project IDs (from the list above) that you specifically mention or discuss. Use an empty array [] if you don't reference any specific project.
- "showContact": set to true when the visitor asks how to contact Sebastian, expresses interest in hiring him, or wants to reach out. Otherwise false.

Always return valid JSON. Never return plain text.`

async function getChatResponse(messages) {
  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_KEY}`,
    },
    body: JSON.stringify({
      model: 'openai/gpt-oss-120b:free',
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages.map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          content: msg.text,
        })),
      ],
    }),
  })
  return res.json()
}

export { getChatResponse }
