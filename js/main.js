const storageKey = 'magnum-opus-site';

const defaultState = {
  hero: {
    name: 'Asher Millett',
    tagline: 'Interweaving design, scholarship, and storytelling.',
    intro:
      'I craft immersive experiences that dance between art, research, and technology — illuminating ideas with warmth and wonder.',
    ctaText: 'Download CV',
    ctaLink: 'assets/cv.pdf',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1600&q=80'
  },
  galleryIntro:
    'A living gallery of works — from installations and photographs to collaborative performances that map the edges of imagination.',
  gallery: [
    {
      title: 'Chromatic Reverie',
      description: 'Light sculptures that react to heartbeat rhythms, exhibited at the Aurora Pavilion.',
      detail: 'Immersive installation · 2023',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      linkText: 'View process journal',
      linkUrl: 'https://example.com/chromatic-reverie'
    },
    {
      title: 'Analog Echoes',
      description: 'Medium-format photography series exploring solitude and urban light.',
      detail: 'Photography · 2022',
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80',
      linkText: 'See gallery',
      linkUrl: 'https://example.com/analog-echoes'
    },
    {
      title: 'Studio Conversations',
      description: 'Intimate interviews with artists about the poetics of unfinished work.',
      detail: 'Podcast · 2021',
      image: 'https://images.unsplash.com/photo-1522199992901-87123e259b17?auto=format&fit=crop&w=1200&q=80',
      linkText: 'Listen now',
      linkUrl: 'https://example.com/studio-conversations'
    }
  ],
  academicsIntro:
    'Rooted in critical making and pedagogy, my academic journey blends rigorous research with tactile experimentation.',
  academics: [
    {
      title: 'PhD, Media Arts & Sciences',
      subtitle: 'MIT · 2025 (expected)',
      description:
        'Dissertation explores embodied storytelling within augmented realities. Advised by Dr. L. Rivera in the Responsive Environments Lab.'
    },
    {
      title: 'MFA, Interdisciplinary Design',
      subtitle: 'Parsons School of Design · 2020',
      description:
        'Graduated with honors; thesis focused on participatory installations amplifying community memory.'
    },
    {
      title: 'BA, Comparative Literature',
      subtitle: 'University of Washington · 2016',
      description: 'Published research on narrative identity and digital humanities.'
    }
  ],
  researchIntro:
    'Explorations that question how humans interface with emerging media — centering care, accessibility, and play.',
  research: [
    {
      title: 'Sensing Belonging',
      summary:
        'A multi-year study on wearable haptics that signal collective presence for remote collaborators.',
      highlight:
        'Co-led interdisciplinary team; published findings in the ACM Designing Interactive Systems conference.',
      tags: ['Wearables', 'Embodied Interaction', 'Inclusive Design'],
      linkText: 'Read publication',
      linkUrl: 'https://example.com/sensing-belonging'
    },
    {
      title: 'Soft Circuits Syllabus',
      summary:
        'Curricular research developing approachable toolkits for teaching e-textiles and soft robotics.',
      highlight:
        'Awarded Teaching Innovation Grant; currently piloted across three universities.',
      tags: ['Pedagogy', 'Creative Technology'],
      linkText: 'Explore resources',
      linkUrl: 'https://example.com/soft-circuits'
    }
  ],
  cv: {
    summary:
      'For a full view of exhibitions, publications, and speaking engagements, browse the extended curriculum vitae.',
    downloadLabel: 'Open full CV',
    downloadUrl: 'assets/cv.pdf',
    highlights: [
      {
        title: 'Select Honors',
        description: 'Design Futures Fellow · Mozilla Creative Media Award · Knight Art + Tech Residency'
      },
      {
        title: 'Teaching Snapshot',
        description: 'MIT · Studio Futures (Graduate Seminar)\nParsons · Tactile Storytelling (Undergraduate Workshop)'
      },
      {
        title: 'Skills in Practice',
        description: 'Creative coding · Narrative strategy · Experience prototyping · Facilitation'
      }
    ]
  },
  booksIntro:
    'Pages that continually reshape my craft — a blend of theory, fiction, and radical imagination.',
  books: [
    {
      title: 'Emergent Strategy',
      author: 'adrienne maree brown',
      note: 'A compass for collective organizing and adaptive leadership.',
      cover: 'https://images.unsplash.com/photo-1529653762956-b0a27278529d?auto=format&fit=crop&w=900&q=80',
      linkText: 'Find book',
      linkUrl: 'https://bookshop.org/books/emergent-strategy/9781849352604'
    },
    {
      title: 'Atlas of AI',
      author: 'Kate Crawford',
      note: 'Uncovers the planetary costs of artificial intelligence.',
      cover: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80',
      linkText: 'Read more',
      linkUrl: 'https://bookshop.org/books/atlas-of-ai/9780300264181'
    },
    {
      title: 'Bluets',
      author: 'Maggie Nelson',
      note: 'Meditations on longing and the color blue — lyrical and precise.',
      cover: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80',
      linkText: 'Revisit notes',
      linkUrl: 'https://example.com/bluets-notes'
    }
  ],
  essaysIntro:
    'Writing as a laboratory for ideas-in-progress — essays, talks, and annotated notes.',
  essays: [
    {
      title: 'Designing for Warm Technology',
      outlet: 'Eye on Design',
      date: 'Spring 2024',
      excerpt:
        'A reflection on crafting interfaces that prioritize emotional resonance and gentleness.',
      link: 'https://example.com/warm-technology'
    },
    {
      title: 'The Poetics of Prototype Rituals',
      outlet: 'Conference keynote',
      date: '2023',
      excerpt:
        'An invitation to treat prototyping as communal storytelling — not merely proof of concept.',
      link: 'https://example.com/prototype-rituals'
    }
  ],
  footerNote: '© ' + new Date().getFullYear() + ' Crafted by Asher Millett. Built to evolve with every edit.',
  lastSaved: new Date().toISOString()
};

let state = loadState();
let isEditing = false;
const inlineBound = new WeakSet();

const schemas = {
  hero: {
    type: 'single',
    path: 'hero',
    title: 'Hero details',
    description: 'Update the welcome banner with your latest headline and call to action.',
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'tagline', label: 'Headline', type: 'text', required: true },
      { name: 'intro', label: 'Introduction', type: 'textarea', required: true },
      { name: 'ctaText', label: 'Button text', type: 'text', required: true },
      {
        name: 'ctaLink',
        label: 'Button link',
        type: 'url',
        placeholder: 'https://… or assets/cv.pdf',
        required: false
      },
      {
        name: 'image',
        label: 'Background image URL',
        type: 'url',
        placeholder: 'Paste any image link',
        required: false
      }
    ]
  },
  gallery: {
    type: 'collection',
    path: 'gallery',
    itemName: 'piece',
    title: 'Gallery piece',
    description: 'Describe the work, add imagery, and optionally link out to more.',
    fields: [
      { name: 'title', label: 'Title', type: 'text', required: true },
      { name: 'detail', label: 'Details (medium, year, etc.)', type: 'text', required: false },
      { name: 'description', label: 'Description', type: 'textarea', required: true },
      {
        name: 'image',
        label: 'Image URL',
        type: 'url',
        placeholder: 'Paste a direct image link',
        required: false
      },
      { name: 'linkText', label: 'Link label', type: 'text', required: false },
      { name: 'linkUrl', label: 'Link URL', type: 'url', required: false }
    ]
  },
  academics: {
    type: 'collection',
    path: 'academics',
    itemName: 'milestone',
    title: 'Academic milestone',
    description: 'Capture degrees, fellowships, or key academic highlights.',
    fields: [
      { name: 'title', label: 'Title', type: 'text', required: true },
      { name: 'subtitle', label: 'Subtitle', type: 'text', required: false },
      { name: 'description', label: 'Summary', type: 'textarea', required: false }
    ]
  },
  research: {
    type: 'collection',
    path: 'research',
    itemName: 'research thread',
    title: 'Research thread',
    description: 'Summarize ongoing or completed research initiatives.',
    fields: [
      { name: 'title', label: 'Title', type: 'text', required: true },
      { name: 'summary', label: 'Summary', type: 'textarea', required: true },
      { name: 'highlight', label: 'Highlight', type: 'textarea', required: false },
      {
        name: 'tags',
        label: 'Tags',
        type: 'text',
        placeholder: 'Separate with commas',
        required: false,
        serializer: value => (Array.isArray(value) ? value.join(', ') : value || ''),
        parser: value =>
          value
            .split(',')
            .map(tag => tag.trim())
            .filter(Boolean)
      },
      { name: 'linkText', label: 'Link label', type: 'text', required: false },
      { name: 'linkUrl', label: 'Link URL', type: 'url', required: false }
    ]
  },
  cv: {
    type: 'single',
    path: 'cv',
    title: 'CV details',
    description: 'Control how your downloadable CV appears.',
    fields: [
      { name: 'summary', label: 'Summary', type: 'textarea', required: true },
      { name: 'downloadLabel', label: 'Button label', type: 'text', required: true },
      { name: 'downloadUrl', label: 'Button link', type: 'url', required: true }
    ]
  },
  cvHighlights: {
    type: 'collection',
    path: 'cv.highlights',
    itemName: 'highlight',
    title: 'CV highlight',
    description: 'Add spotlight sections — use line breaks for bullet-style lists.',
    fields: [
      { name: 'title', label: 'Title', type: 'text', required: true },
      {
        name: 'description',
        label: 'Description',
        type: 'textarea',
        required: true,
        placeholder: 'Separate lines for individual points'
      }
    ]
  },
  books: {
    type: 'collection',
    path: 'books',
    itemName: 'book',
    title: 'Book',
    description: 'Highlight a book and why it matters to you.',
    fields: [
      { name: 'title', label: 'Title', type: 'text', required: true },
      { name: 'author', label: 'Author', type: 'text', required: true },
      { name: 'note', label: 'Why it matters', type: 'textarea', required: false },
      { name: 'cover', label: 'Cover image URL', type: 'url', required: false },
      { name: 'linkText', label: 'Link label', type: 'text', required: false },
      { name: 'linkUrl', label: 'Link URL', type: 'url', required: false }
    ]
  },
  essays: {
    type: 'collection',
    path: 'essays',
    itemName: 'essay',
    title: 'Essay or talk',
    description: 'Document essays, talks, or published notes.',
    fields: [
      { name: 'title', label: 'Title', type: 'text', required: true },
      { name: 'outlet', label: 'Outlet / Context', type: 'text', required: false },
      { name: 'date', label: 'Date', type: 'text', required: false },
      { name: 'excerpt', label: 'Excerpt', type: 'textarea', required: true },
      { name: 'link', label: 'Link', type: 'url', required: false }
    ]
  }
};

const tabButtons = document.querySelectorAll('[data-tab]');
const panels = document.querySelectorAll('[data-panel]');
const editToggleBtn = document.getElementById('editToggle');
const resetBtn = document.getElementById('resetContent');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalForm = document.getElementById('modalForm');
const modalCloseElements = modal.querySelectorAll('[data-close]');

init();

function init() {
  setupTabs();
  renderAll();
  attachGlobalHandlers();
}

function setupTabs() {
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.dataset.tab;
      activateTab(target);
    });
  });
}

function activateTab(name) {
  tabButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.tab === name));
  panels.forEach(panel => panel.classList.toggle('active', panel.dataset.panel === name));
}

function attachGlobalHandlers() {
  editToggleBtn?.addEventListener('click', toggleEditMode);
  resetBtn?.addEventListener('click', resetContent);

  document.body.addEventListener('click', event => {
    const { target } = event;
    if (!(target instanceof HTMLElement)) return;

    if (target.matches('[data-editor]')) {
      const section = target.dataset.editor;
      openEditor(section);
    }

    if (target.matches('[data-add]')) {
      const section = target.dataset.add;
      openEditor(section);
    }

    if (target.matches('.item-controls [data-edit]')) {
      const section = target.closest('[data-section]')?.dataset.section;
      const index = Number(target.dataset.edit);
      if (section != null) openEditor(section, index);
    }

    if (target.matches('.item-controls [data-delete]')) {
      const section = target.closest('[data-section]')?.dataset.section;
      const index = Number(target.dataset.delete);
      if (section != null) deleteItem(section, index);
    }
  });

  document.addEventListener('click', event => {
    if (!isEditing) return;
    const link = event.target instanceof HTMLElement ? event.target.closest('a') : null;
    if (link) {
      event.preventDefault();
    }
  }, true);

  modalCloseElements.forEach(el => el.addEventListener('click', closeModal));
  modal.addEventListener('click', event => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

function toggleEditMode() {
  isEditing = !isEditing;
  document.body.classList.toggle('editing', isEditing);
  editToggleBtn.textContent = isEditing ? 'Exit edit mode' : 'Enter edit mode';
  renderAll();
}

function resetContent() {
  const confirmed = window.confirm('Reset all content to the starting template? This cannot be undone.');
  if (!confirmed) return;
  state = deepClone(defaultState);
  saveState();
  renderAll();
  activateTab('gallery');
}

function openEditor(section, index = null) {
  const schema = schemas[section];
  if (!schema) return;
  const path = schema.path ?? section;
  const target = getValue(path);
  const isCollection = schema.type === 'collection';
  const isSingle = schema.type === 'single';

  let record = {};
  if (schema.type === 'single') {
    record = { ...target };
  } else if (isCollection && Array.isArray(target) && index != null) {
    record = { ...target[index] };
  }

  buildForm(schema, record);

  modal.dataset.section = section;
  modal.dataset.index = index != null ? String(index) : '';
  if (isSingle) {
    modalTitle.textContent = schema.title;
  } else {
    modalTitle.textContent = index != null ? `Edit ${schema.itemName ?? schema.title}` : `Add ${schema.itemName ?? schema.title}`;
  }
  modalDescription.textContent = schema.description ?? '';
  modal.setAttribute('aria-hidden', 'false');
  modal.classList.add('open');
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  modalForm.reset();
  modal.removeAttribute('data-section');
  modal.removeAttribute('data-index');
}

function buildForm(schema, record) {
  modalForm.innerHTML = '';
  schema.fields.forEach(field => {
    const wrapper = document.createElement('div');
    wrapper.className = 'field';

    const label = document.createElement('label');
    label.textContent = field.label;
    label.setAttribute('for', field.name);

    let input;
    if (field.type === 'textarea') {
      input = document.createElement('textarea');
    } else {
      input = document.createElement('input');
      input.type = field.type === 'url' ? 'url' : field.type || 'text';
    }

    input.id = field.name;
    input.name = field.name;
    input.required = Boolean(field.required);
    if (field.placeholder) input.placeholder = field.placeholder;
    const existingValue = record?.[field.name];
    if (field.serializer) {
      input.value = field.serializer(existingValue);
    } else if (existingValue != null) {
      input.value = existingValue;
    }

    input.addEventListener('input', () => {
      input.classList.remove('invalid');
    });

    wrapper.append(label, input);
    modalForm.append(wrapper);
  });

  const actions = document.createElement('div');
  actions.className = 'form-actions';
  const cancelBtn = document.createElement('button');
  cancelBtn.type = 'button';
  cancelBtn.className = 'button ghost';
  cancelBtn.textContent = 'Cancel';
  cancelBtn.addEventListener('click', closeModal);

  const saveBtn = document.createElement('button');
  saveBtn.type = 'submit';
  saveBtn.className = 'button';
  saveBtn.textContent = 'Save changes';

  actions.append(cancelBtn, saveBtn);
  modalForm.append(actions);

  modalForm.onsubmit = event => {
    event.preventDefault();
    handleFormSubmit(schema);
  };
}

function handleFormSubmit(schema) {
  const section = modal.dataset.section;
  const indexAttr = modal.dataset.index;
  const path = schema.path ?? section;
  const isCollection = schema.type === 'collection';
  const index = indexAttr !== '' ? Number(indexAttr) : null;

  const formData = new FormData(modalForm);
  const record = {};
  let hasError = false;

  schema.fields.forEach(field => {
    const raw = formData.get(field.name);
    const value = typeof raw === 'string' ? raw.trim() : '';

    if (!value && field.required && !field.parser) {
      hasError = true;
      const input = modalForm.querySelector(`[name="${field.name}"]`);
      if (input) input.classList.add('invalid');
      return;
    }

    let finalValue = value;
    if (field.parser) {
      finalValue = value ? field.parser(value) : [];
    }

    record[field.name] = finalValue;
  });

  if (hasError) {
    alert('Please complete the required fields before saving.');
    return;
  }

  if (schema.type === 'single') {
    const existing = getValue(path);
    const merged = { ...existing, ...record };
    setValue(path, merged);
  } else if (isCollection) {
    const list = Array.isArray(getValue(path)) ? [...getValue(path)] : [];
    if (index != null && list[index]) {
      list[index] = { ...list[index], ...record };
    } else {
      list.push(record);
    }
    setValue(path, list);
  }

  saveState();
  renderAll();
  closeModal();
}

function deleteItem(section, index) {
  const schema = schemas[section];
  if (!schema) return;
  const confirmed = window.confirm('Remove this entry? You can always add it again.');
  if (!confirmed) return;
  const path = schema.path ?? section;
  const list = Array.isArray(getValue(path)) ? [...getValue(path)] : [];
  list.splice(index, 1);
  setValue(path, list);
  saveState();
  renderAll();
}

function renderAll() {
  renderHero();
  renderGallery();
  renderAcademics();
  renderResearch();
  renderCv();
  renderBooks();
  renderEssays();
  updateInlineEditors();
  updateTimestamp();
}

function renderHero() {
  const heroMedia = document.querySelector('.hero-media');
  if (heroMedia) {
    heroMedia.style.backgroundImage = state.hero.image ? `url(${state.hero.image})` : 'none';
  }
  const cta = document.getElementById('heroCta');
  if (cta) {
    cta.href = state.hero.ctaLink || '#';
  }
}

function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  grid.innerHTML = '';
  state.gallery.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.section = 'gallery';

    const controls = createItemControls('gallery', index);
    card.append(controls);

    const figure = document.createElement('div');
    figure.className = 'card-figure';
    if (item.image) {
      figure.style.backgroundImage = `url(${item.image})`;
    } else {
      figure.style.backgroundImage = 'linear-gradient(135deg, rgba(123, 92, 255, 0.4), rgba(40, 44, 75, 0.8))';
    }
    const label = document.createElement('span');
    label.textContent = item.title || 'Untitled work';
    figure.append(label);
    card.append(figure);

    const title = document.createElement('h3');
    title.textContent = item.title || 'Untitled work';
    card.append(title);

    if (item.detail) {
      const detail = document.createElement('p');
      detail.className = 'meta';
      detail.textContent = item.detail;
      card.append(detail);
    }

    if (item.description) {
      const description = document.createElement('p');
      description.textContent = item.description;
      card.append(description);
    }

    if (item.linkUrl) {
      const link = document.createElement('a');
      link.href = item.linkUrl;
      link.target = '_blank';
      link.rel = 'noopener';
      link.className = 'button ghost';
      link.textContent = item.linkText || 'View';
      card.append(link);
    }

    grid.append(card);
  });
}

function renderAcademics() {
  const timeline = document.getElementById('academicsTimeline');
  const template = document.getElementById('timelineItemTemplate');
  if (!timeline || !template) return;
  timeline.innerHTML = '';
  state.academics.forEach((item, index) => {
    const clone = template.content.cloneNode(true);
    const article = clone.querySelector('.timeline-item');
    if (article) {
      article.dataset.section = 'academics';
      const controls = createItemControls('academics', index);
      article.appendChild(controls);
    }
    const title = clone.querySelector('h3');
    const subtitle = clone.querySelector('.timeline-sub');
    const copy = clone.querySelector('.timeline-copy');
    if (title) title.textContent = item.title || 'Academic highlight';
    if (subtitle) subtitle.textContent = item.subtitle || '';
    if (copy) copy.textContent = item.description || '';
    timeline.appendChild(clone);
  });
}

function renderResearch() {
  const list = document.getElementById('researchList');
  if (!list) return;
  list.innerHTML = '';
  state.research.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = 'research-card';
    card.dataset.section = 'research';
    const controls = createItemControls('research', index);
    card.append(controls);

    const header = document.createElement('header');
    const title = document.createElement('h3');
    title.textContent = item.title || 'Research thread';
    header.append(title);
    if (item.linkUrl) {
      const link = document.createElement('a');
      link.href = item.linkUrl;
      link.target = '_blank';
      link.rel = 'noopener';
      link.className = 'button ghost';
      link.textContent = item.linkText || 'View';
      header.append(link);
    }
    card.append(header);

    if (item.summary) {
      const summary = document.createElement('p');
      summary.textContent = item.summary;
      card.append(summary);
    }

    if (item.highlight) {
      const highlight = document.createElement('p');
      highlight.className = 'meta';
      highlight.textContent = item.highlight;
      card.append(highlight);
    }

    if (item.tags && item.tags.length) {
      const tags = document.createElement('div');
      tags.className = 'tag-row';
      item.tags.forEach(tagText => {
        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.textContent = tagText;
        tags.append(tag);
      });
      card.append(tags);
    }

    list.append(card);
  });
}

function renderCv() {
  const link = document.getElementById('cvLink');
  if (link) {
    link.href = state.cv.downloadUrl || '#';
    link.textContent = state.cv.downloadLabel || 'View CV';
  }
  const grid = document.getElementById('cvHighlights');
  if (!grid) return;
  grid.innerHTML = '';
  state.cv.highlights.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.section = 'cvHighlights';
    const controls = createItemControls('cvHighlights', index);
    card.append(controls);

    const title = document.createElement('h3');
    title.textContent = item.title || 'Highlight';
    card.append(title);

    if (item.description) {
      if (item.description.includes('\n')) {
        const list = document.createElement('ul');
        item.description.split('\n').forEach(line => {
          const trimmed = line.trim();
          if (!trimmed) return;
          const li = document.createElement('li');
          li.textContent = trimmed;
          list.append(li);
        });
        card.append(list);
      } else {
        const para = document.createElement('p');
        para.textContent = item.description;
        card.append(para);
      }
    }

    grid.append(card);
  });
}

function renderBooks() {
  const gallery = document.getElementById('bookGallery');
  if (!gallery) return;
  gallery.innerHTML = '';
  state.books.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.section = 'books';
    const controls = createItemControls('books', index);
    card.append(controls);

    if (item.cover) {
      const img = document.createElement('img');
      img.src = item.cover;
      img.alt = `${item.title || 'Book cover'} cover`;
      card.append(img);
    } else {
      const figure = document.createElement('div');
      figure.className = 'card-figure';
      figure.style.backgroundImage = 'linear-gradient(135deg, rgba(123, 92, 255, 0.35), rgba(40, 44, 75, 0.8))';
      const span = document.createElement('span');
      span.textContent = item.title || 'Book';
      figure.append(span);
      card.append(figure);
    }

    const title = document.createElement('h3');
    title.textContent = item.title || 'Book';
    card.append(title);

    if (item.author) {
      const author = document.createElement('p');
      author.className = 'meta';
      author.textContent = item.author;
      card.append(author);
    }

    if (item.note) {
      const note = document.createElement('p');
      note.textContent = item.note;
      card.append(note);
    }

    if (item.linkUrl) {
      const link = document.createElement('a');
      link.href = item.linkUrl;
      link.target = '_blank';
      link.rel = 'noopener';
      link.className = 'button ghost';
      link.textContent = item.linkText || 'Learn more';
      card.append(link);
    }

    gallery.append(card);
  });
}

function renderEssays() {
  const stack = document.getElementById('essayStack');
  const template = document.getElementById('essayItemTemplate');
  if (!stack || !template) return;
  stack.innerHTML = '';
  state.essays.forEach((item, index) => {
    const clone = template.content.cloneNode(true);
    const card = clone.querySelector('.essay-card');
    if (!card) return;
    card.dataset.section = 'essays';
    const controls = createItemControls('essays', index);
    card.appendChild(controls);

    const title = card.querySelector('h3');
    const meta = card.querySelector('.essay-meta');
    const excerpt = card.querySelector('.essay-excerpt');
    const link = card.querySelector('.essay-link');

    if (title) title.textContent = item.title || 'Essay';
    const metaParts = [item.outlet, item.date].filter(Boolean);
    if (meta) meta.textContent = metaParts.join(' · ');
    if (excerpt) excerpt.textContent = item.excerpt || '';
    if (link) {
      if (item.link) {
        link.href = item.link;
        link.textContent = 'Read essay';
        link.style.display = '';
      } else {
        link.style.display = 'none';
      }
    }

    stack.appendChild(clone);
  });
}

function createItemControls(section, index) {
  const controls = document.createElement('div');
  controls.className = 'item-controls';
  controls.innerHTML = `
    <button type="button" data-edit="${index}">Edit</button>
    <button type="button" data-delete="${index}">Delete</button>
  `;
  controls.dataset.section = section;
  return controls;
}

function updateInlineEditors() {
  document.querySelectorAll('[data-editable]').forEach(el => {
    const path = el.dataset.editable;
    if (!path) return;
    const value = getValue(path) ?? '';
    if (el.textContent !== value) {
      el.textContent = value;
    }

    if (isEditing) {
      el.setAttribute('contenteditable', 'true');
      el.setAttribute('spellcheck', 'true');
    } else {
      el.removeAttribute('contenteditable');
      el.removeAttribute('spellcheck');
    }

    if (!inlineBound.has(el)) {
      el.addEventListener('blur', handleInlineBlur);
      el.addEventListener('keydown', handleInlineKeydown);
      inlineBound.add(el);
    }
  });
}

function handleInlineBlur(event) {
  const el = event.target;
  if (!(el instanceof HTMLElement)) return;
  if (!el.isContentEditable) return;
  const path = el.dataset.editable;
  if (!path) return;
  const value = el.textContent?.trim() ?? '';
  setValue(path, value);
  saveState();
  renderAll();
}

function handleInlineKeydown(event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    event.currentTarget?.blur();
  }
}

function updateTimestamp() {
  const timeEl = document.getElementById('lastSaved');
  if (!timeEl) return;
  const date = state.lastSaved ? new Date(state.lastSaved) : null;
  if (!date || Number.isNaN(date.valueOf())) {
    timeEl.textContent = 'just now';
    return;
  }
  timeEl.dateTime = date.toISOString();
  timeEl.textContent = date.toLocaleString([], {
    dateStyle: 'medium',
    timeStyle: 'short'
  });
}

function loadState() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return deepClone(defaultState);
    const parsed = JSON.parse(raw);
    return mergeDefaults(parsed, defaultState);
  } catch (error) {
    console.warn('Failed to load saved data, using defaults.', error);
    return deepClone(defaultState);
  }
}

function saveState() {
  try {
    state.lastSaved = new Date().toISOString();
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch (error) {
    console.error('Unable to save your changes to this browser.', error);
  }
  updateTimestamp();
}

function getValue(path) {
  return path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), state);
}

function setValue(path, value) {
  const keys = path.split('.');
  let cursor = state;
  for (let i = 0; i < keys.length - 1; i += 1) {
    const key = keys[i];
    if (!cursor[key] || typeof cursor[key] !== 'object') {
      cursor[key] = {};
    }
    cursor = cursor[key];
  }
  cursor[keys[keys.length - 1]] = value;
}

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function mergeDefaults(saved, defaults) {
  if (Array.isArray(defaults)) {
    return Array.isArray(saved) ? saved.map((item, index) => mergeDefaults(item, defaults[index] ?? {})) : deepClone(defaults);
  }
  if (typeof defaults !== 'object' || defaults === null) {
    return saved ?? defaults;
  }
  const result = { ...defaults };
  Object.keys(saved || {}).forEach(key => {
    if (key in defaults) {
      result[key] = mergeDefaults(saved[key], defaults[key]);
    } else {
      result[key] = saved[key];
    }
  });
  return result;
}
