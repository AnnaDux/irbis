/* ================= 1 ================= */

const items = document.querySelectorAll('.who-item')
const image = document.getElementById('whoImage')

items.forEach(item => {
	item.addEventListener('click', () => {
		items.forEach(i => {
			i.classList.remove('active')
		})

		item.classList.add('active')

		image.src = item.dataset.img

		const text = item.dataset.text

		item.querySelector('.who-text').innerText = text
	})
})

/* ================= 2 ================= */

document.querySelectorAll('.audit-card').forEach(card => {
	card.addEventListener('click', () => {
		// снимаем активность со всех
		document
			.querySelectorAll('.audit-card')
			.forEach(c => c.classList.remove('is-active'))

		// активируем текущую
		card.classList.add('is-active')

		// эффект нажатия
		card.classList.add('is-pressed')
		setTimeout(() => card.classList.remove('is-pressed'), 160)
	})

	// чтобы работало и через Enter
	card.addEventListener('keydown', e => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault()
			card.click()
		}
	})
})

/* ================= 3 ================= */

const accordion = document.getElementById('stepsAccordion')

if (accordion) {
	const items = accordion.querySelectorAll('.step-item')

	items.forEach(item => {
		const head = item.querySelector('.step-head')

		head.addEventListener('click', () => {
			const isOpen = item.classList.contains('is-open')

			// если нужно чтобы открывался только один — закрываем остальные:
			items.forEach(i => {
				i.classList.remove('is-open')
				i.querySelector('.step-head').setAttribute('aria-expanded', 'false')
			})

			// открываем текущий (если был закрыт)
			if (!isOpen) {
				item.classList.add('is-open')
				head.setAttribute('aria-expanded', 'true')
			}
		})
	})
}

/* ================= 6 ================= */

const seoTabs = document.querySelectorAll('.seo-tab')
const seoPanels = document.querySelectorAll('.seo-panel')

seoTabs.forEach(tab => {
	tab.addEventListener('click', () => {
		const target = tab.dataset.tab

		seoTabs.forEach(t => {
			t.classList.remove('is-active')
			t.setAttribute('aria-selected', 'false')
		})

		seoPanels.forEach(p => p.classList.remove('is-active'))

		tab.classList.add('is-active')
		tab.setAttribute('aria-selected', 'true')

		const panel = document.getElementById(target)
		if (panel) panel.classList.add('is-active')
	})
})

const accordionItems = document.querySelectorAll('.accordion-item')

accordionItems.forEach(item => {
	const button = item.querySelector('.accordion-header')
	const body = item.querySelector('.accordion-body')

	button.addEventListener('click', () => {
		const isActive = item.classList.contains('active')

		item.parentElement.querySelectorAll('.accordion-item').forEach(el => {
			el.classList.remove('active')
			el.querySelector('.accordion-body').style.maxHeight = null
		})

		if (!isActive) {
			item.classList.add('active')
			body.style.maxHeight = body.scrollHeight + 'px'
		}
	})
})

const processSteps = document.querySelectorAll('.process-step')

processSteps.forEach(step => {
	const header = step.querySelector('.process-step-header')

	header.addEventListener('click', () => {
		const isActive = step.classList.contains('active')

		processSteps.forEach(item => {
			item.classList.remove('active')
		})

		if (!isActive) {
			step.classList.add('active')
		}
	})
})

const serviceFaqItems = document.querySelectorAll('.services-faq__item')

serviceFaqItems.forEach(item => {
	const button = item.querySelector('.services-faq__question')
	const answer = item.querySelector('.services-faq__answer')

	if (item.classList.contains('active')) {
		answer.style.maxHeight = answer.scrollHeight + 'px'
	}

	button.addEventListener('click', () => {
		const isActive = item.classList.contains('active')

		serviceFaqItems.forEach(faqItem => {
			faqItem.classList.remove('active')
			faqItem.querySelector('.services-faq__answer').style.maxHeight = null
		})

		if (!isActive) {
			item.classList.add('active')
			answer.style.maxHeight = answer.scrollHeight + 'px'
		}
	})
})

window.addEventListener('resize', () => {
	document
		.querySelectorAll('.services-faq__item.active .services-faq__answer')
		.forEach(answer => {
			answer.style.maxHeight = answer.scrollHeight + 'px'
		})
})
