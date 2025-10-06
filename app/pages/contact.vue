<script setup lang="ts">
import { ref, computed } from 'vue'
import { useHead } from '#imports'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

useHead({ title: 'Contact · bhety.tech' })

const name = ref('')
const email = ref('')
const message = ref('')
const hp = ref('')
const sending = ref(false)
const sent = ref(false)
const error = ref<string | null>(null)

const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

const canSubmit = computed(() =>
    name.value.trim().length >= 2 &&
    isValidEmail(email.value.trim()) &&
    message.value.trim().length >= 10
)

async function onSubmit() {
  error.value = null
  sent.value = false

  if (!canSubmit.value) {
    error.value = 'Please fill all fields correctly.'
    return
  }

  try {
    sending.value = true

    const body = new URLSearchParams({
      name: name.value,
      email: email.value,
      message: message.value,
      hp: hp.value || ''
    }).toString()

    const res = await fetch('https://bhetycodes.online/send.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
      mode: 'cors',           // ✅ tell fetch this is cross-origin
      credentials: 'omit'     // ✅ don’t send cookies
    })

    const text = await res.text()   // ✅ read server message ("OK" or error text)
    // Helpful while testing:
    // console.log('send.php ->', res.status, text)

    if (!res.ok) {
      throw new Error(text || `HTTP ${res.status}`)
    }

    // Optional: check exact success text if you want
    // if (!/ok/i.test(text)) { throw new Error(text || 'Unexpected response') }

    sent.value = true
    name.value = ''
    email.value = ''
    message.value = ''
  } catch (e: any) {
    error.value = e?.message || 'Something went wrong.'
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <div class="bg-neutral-950 min-h-[80vh] py-16">
    <section class="max-w-4xl mx-auto px-6 md:px-8 text-white">
      <header class="mb-10 text-center">
        <h1 class="text-3xl md:text-4xl font-extrabold">/contact</h1>
        <p class="mt-3 text-neutral-400">
          Have a project or a question? Send me a message and I’ll get back to you.
        </p>
      </header>

      <Card class="rounded-2xl border border-neutral-800 bg-neutral-900/95 shadow-sm">
        <CardHeader>
          <CardTitle class="text-white">Send a message</CardTitle>
        </CardHeader>

        <CardContent>
          <form class="space-y-5" @submit.prevent="onSubmit">
            <!-- Honeypot -->
            <input v-model="hp" type="text" class="hidden" autocomplete="off" tabindex="-1" aria-hidden="true" />

            <!-- Name -->
            <div>
              <label class="block text-sm mb-2 text-neutral-300">Name</label>
              <input v-model="name" type="text" required placeholder="Your name"
                     class="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-700
                        text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500" />
            </div>

            <!-- Email -->
            <div>
              <label class="block text-sm mb-2 text-neutral-300">Email</label>
              <input v-model="email" type="email" required placeholder="you@email.com"
                     class="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-700
                        text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500" />
            </div>

            <!-- Message -->
            <div>
              <label class="block text-sm mb-2 text-neutral-300">Message</label>
              <textarea v-model="message" rows="6" required placeholder="Tell me a bit about your project…"
                        class="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-700
                        text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500" />
            </div>

            <!-- Alerts -->
            <p v-if="error" class="text-sm text-red-400">{{ error }}</p>
            <p v-if="sent" class="text-sm text-green-400">Thanks! Your message was sent.</p>

            <!-- Actions -->
            <div class="pt-2">
              <Button type="submit" :disabled="!canSubmit || sending"
                      class="bg-white text-black border border-black hover:bg-black hover:text-white
                       disabled:opacity-60 disabled:cursor-not-allowed transition-colors">
                {{ sending ? 'Sending…' : 'Send Message' }}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  </div>
</template>
