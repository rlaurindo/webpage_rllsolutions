const header = document.querySelector("[data-header]");
const filters = document.querySelectorAll("[data-filter]");
const cases = document.querySelectorAll("[data-category]");
const form = document.querySelector(".contact-form");
const formNote = document.querySelector("[data-form-note]");
const languageButtons = document.querySelectorAll("[data-language]");
const whatsappNumber = "351965695323";
const contactEmail = "rllautomations@gmail.com";

const translations = {
  en: {
    "Soluções": "Solutions", "Portfólio": "Portfolio", "Processo": "Process", "Contacto": "Contact", "Pedir orçamento": "Request a quote",
    "Software à medida para negócios em crescimento": "Custom software for growing businesses",
    "Transformamos processos manuais em plataformas digitais que vendem, organizam e escalam.": "We turn manual processes into digital platforms that sell, organize and scale.",
    "Criamos sistemas web, dashboards financeiros, automações e aplicações para empresas que precisam de mais controlo operacional, melhor experiência para clientes e decisões apoiadas por dados.": "We build web systems, financial dashboards, automations and applications for companies that need greater operational control, better customer experiences and data-driven decisions.",
    "Ver trabalhos": "View our work", "Financeiro, agenda, stock e performance": "Finance, scheduling, inventory and performance", "Automação": "Automation",
    "Fluxos, lembretes, relatórios e operações": "Workflows, reminders, reports and operations", "Experiências para clientes, equipas e gestores": "Experiences for customers, teams and managers", "Negócio": "Business", "Soluções desenhadas para captar e reter clientes": "Solutions designed to acquire and retain customers",
    "O que fazemos": "What we do", "Sistemas completos para empresas que querem trabalhar com mais clareza.": "Complete systems for companies that want to operate with greater clarity.",
    "Oferta de entrada para novos clientes": "Starter offer for new customers", "Diagnóstico gratuito de processos: avaliamos onde a sua empresa perde tempo, dinheiro ou oportunidades.": "Free process assessment: we identify where your company loses time, money or opportunities.", "Agendar diagnóstico": "Book an assessment",
    "Plataformas de gestão": "Management platforms", "Agenda, clientes, equipa, pagamentos, stock, relatórios e permissões num único ambiente profissional.": "Scheduling, customers, teams, payments, inventory, reports and permissions in one professional environment.",
    "Dashboards financeiros": "Financial dashboards", "Controlo de entradas, saídas, fluxo de caixa, rankings, metas e indicadores prontos para decisão.": "Control revenue, expenses, cash flow, rankings, targets and decision-ready indicators.",
    "Automação operacional": "Operational automation", "Lembretes, notificações, relatórios automáticos e processos que reduzem tarefas repetitivas.": "Reminders, notifications, automated reports and processes that reduce repetitive work.",
    "Aplicações digitais": "Digital applications", "Portais para clientes, apps web responsivas, áreas premium e interfaces pensadas para uso diário.": "Customer portals, responsive web apps, premium areas and interfaces designed for everyday use.",
    "Testes de performance": "Performance testing", "Descubra os limites da sua aplicação antes dos seus utilizadores.": "Discover your application's limits before your users do.",
    "Planeamos e executamos testes de carga, stress e escalabilidade para identificar lentidão, erros e gargalos antes que afetem o negócio.": "We plan and run load, stress and scalability tests to identify slowdowns, errors and bottlenecks before they affect the business.",
    "Teste de carga": "Load testing", "Teste de stress": "Stress testing", "Teste de API": "API testing", "Relatório técnico": "Technical report",
    "Testes automatizados e reproduzíveis para APIs, serviços web e pipelines de integração contínua.": "Automated, reproducible tests for APIs, web services and continuous integration pipelines.",
    "Simulação de múltiplos utilizadores e cenários de carga para aplicações, APIs e bases de dados.": "Simulation of multiple users and load scenarios for applications, APIs and databases.",
    "Análise de performance do código .NET para localizar métodos lentos, consumo de CPU e gargalos.": ".NET code performance analysis to locate slow methods, CPU usage and bottlenecks.",
    "Análise de memória em aplicações .NET para detetar fugas, retenções e alocações excessivas.": "Memory analysis for .NET applications to detect leaks, retention and excessive allocations.",
    "O que recebe": "What you receive", "Métricas de tempo de resposta, throughput, taxa de erro, CPU e memória, com diagnóstico e recomendações práticas para melhorar a aplicação.": "Response-time, throughput, error-rate, CPU and memory metrics, with diagnostics and practical recommendations to improve the application.",
    "Produtos digitais já desenhados para resolver problemas reais.": "Digital products designed to solve real problems.",
    "Cada projeto combina interface, lógica de negócio e visão comercial: o objetivo não é apenas parecer bem, é ajudar a empresa a vender melhor e operar com menos fricção.": "Each project combines interface design, business logic and commercial vision: the goal is not only to look good, but to help the company sell better and operate with less friction.",
    "Todos": "All", "Gestão": "Management", "Financeiro": "Finance", "Painel principal · valores ocultos": "Main dashboard · hidden values", "Painel de Controlo": "Control Panel",
    "Gestão financeira e custos de obras numa única plataforma": "Financial and construction-cost management on one platform",
    "Web app desenvolvido para a Talente Eclipse Cofragem, com controlo por período, entradas, despesas, categorias, fundos, sócios, distribuição de lucros e perfis de acesso para administração e consulta.": "Web app developed for Talente Eclipse Cofragem, with period control, revenue, expenses, categories, funds, partners, profit distribution and access profiles.",
    "Controlo financeiro para operações multi-cidade": "Financial control for multi-city operations", "Painel com saldo mensal, entradas, despesas, fluxo de caixa, performance por cidade e ranking de atendimento para equipas comerciais.": "Dashboard with monthly balance, revenue, expenses, cash flow, performance by city and service rankings for commercial teams.",
    "Agenda operacional para serviços presenciais": "Operational scheduling for in-person services", "Gestão de marcações, clientes, barbeiros, estados de atendimento, lembretes e faturação diária.": "Management of appointments, customers, barbers, service status, reminders and daily billing.",
    "Relatórios": "Reports", "Visão financeira com metas e desempenho de equipa": "Financial overview with targets and team performance", "Indicadores de receita, formas de pagamento, evolução diária, serviços mais vendidos e comissão.": "Revenue indicators, payment methods, daily trends, best-selling services and commission.",
    "Treino Inteligente": "Smart Training", "Produto digital para personal trainers e alunos": "Digital product for personal trainers and students", "Experiência premium com treino, pagamentos, vídeos, evolução e acompanhamento numa só plataforma.": "Premium experience with training, payments, videos, progress and coaching on one platform.",
    "Gestão de alunos, planos e convites": "Student, plan and invitation management", "Área de treinador com faturação mensal, alunos ativos, links de convite e diretório completo.": "Trainer area with monthly billing, active students, invitation links and a complete directory.",
    "Planos de treino com impressão e uso offline": "Training plans for print and offline use", "Rotinas por nível, carga, séries, descanso, guias de execução e versão PDF para acompanhamento.": "Routines by level, load, sets, rest, execution guides and a PDF version for tracking.",
    "Como trabalhamos": "How we work", "Da ideia ao sistema em produção, com foco no resultado comercial.": "From idea to production system, focused on commercial results.",
    "Diagnóstico": "Assessment", "Mapeamos o processo atual, gargalos, metas e o que precisa de ser medido para vender ou operar melhor.": "We map the current process, bottlenecks, goals and what must be measured to sell or operate better.",
    "Protótipo": "Prototype", "Desenhamos os fluxos principais e validamos a experiência antes de avançar para o desenvolvimento.": "We design the main workflows and validate the experience before development begins.",
    "Construção": "Build", "Implementamos interface, base de dados, autenticação, dashboards, automações e integrações essenciais.": "We implement the interface, database, authentication, dashboards, automations and essential integrations.",
    "Evolução": "Evolution", "Acompanhamos métricas, ajustamos funcionalidades e preparamos novas fases conforme o negócio cresce.": "We monitor metrics, refine features and prepare new phases as the business grows.",
    "Vamos criar o seu próximo sistema": "Let's build your next system", "Se a sua empresa ainda gere clientes, pagamentos ou relatórios manualmente, há oportunidade de crescer.": "If your company still manages customers, payments or reports manually, there is room to grow.",
    "A RLL Solutions pode desenhar uma plataforma personalizada para o seu negócio, com uma presença digital profissional e ferramentas que aumentam a produtividade.": "RLL Solutions can design a custom platform for your business, with a professional digital presence and tools that increase productivity.",
    "Nome": "Name", "Empresa": "Company", "Objetivo": "Goal", "Mensagem": "Message", "Quero criar um sistema de gestão": "I want to create a management system", "Quero automatizar processos": "I want to automate processes", "Quero um dashboard financeiro": "I want a financial dashboard", "Quero uma aplicação para clientes": "I want a customer application", "Quero testes de performance": "I want performance testing",
    "Enviar por WhatsApp": "Send via WhatsApp", "Enviar por email": "Send by email", "Ao enviar, abriremos o WhatsApp com os dados do seu pedido de orçamento já preenchidos.": "When you submit, WhatsApp will open with your quote request already filled in.", "WhatsApp · Orçamento": "WhatsApp · Quote", "Voltar ao topo": "Back to top", "O seu nome": "Your name", "Nome da empresa": "Company name", "Conte-nos o que pretende resolver": "Tell us what you want to solve", "Selecionar idioma": "Select language"
  },
  es: {
    "Soluções": "Soluciones", "Portfólio": "Portafolio", "Processo": "Proceso", "Pedir orçamento": "Solicitar presupuesto",
    "Software à medida para negócios em crescimento": "Software a medida para negocios en crecimiento", "Transformamos processos manuais em plataformas digitais que vendem, organizam e escalam.": "Transformamos procesos manuales en plataformas digitales que venden, organizan y escalan.",
    "Criamos sistemas web, dashboards financeiros, automações e aplicações para empresas que precisam de mais controlo operacional, melhor experiência para clientes e decisões apoiadas por dados.": "Creamos sistemas web, paneles financieros, automatizaciones y aplicaciones para empresas que necesitan más control operativo, una mejor experiencia de cliente y decisiones basadas en datos.",
    "Ver trabalhos": "Ver trabajos", "Financeiro, agenda, stock e performance": "Finanzas, agenda, inventario y rendimiento", "Automação": "Automatización", "Fluxos, lembretes, relatórios e operações": "Flujos, recordatorios, informes y operaciones", "Experiências para clientes, equipas e gestores": "Experiencias para clientes, equipos y gestores", "Negócio": "Negocio", "Soluções desenhadas para captar e reter clientes": "Soluciones diseñadas para captar y retener clientes",
    "O que fazemos": "Qué hacemos", "Sistemas completos para empresas que querem trabalhar com mais clareza.": "Sistemas completos para empresas que quieren trabajar con mayor claridad.", "Oferta de entrada para novos clientes": "Oferta inicial para nuevos clientes", "Diagnóstico gratuito de processos: avaliamos onde a sua empresa perde tempo, dinheiro ou oportunidades.": "Diagnóstico gratuito de procesos: evaluamos dónde su empresa pierde tiempo, dinero u oportunidades.", "Agendar diagnóstico": "Agendar diagnóstico",
    "Plataformas de gestão": "Plataformas de gestión", "Agenda, clientes, equipa, pagamentos, stock, relatórios e permissões num único ambiente profissional.": "Agenda, clientes, equipo, pagos, inventario, informes y permisos en un único entorno profesional.", "Dashboards financeiros": "Paneles financieros", "Controlo de entradas, saídas, fluxo de caixa, rankings, metas e indicadores prontos para decisão.": "Control de ingresos, gastos, flujo de caja, rankings, objetivos e indicadores listos para decidir.", "Automação operacional": "Automatización operativa", "Lembretes, notificações, relatórios automáticos e processos que reduzem tarefas repetitivas.": "Recordatorios, notificaciones, informes automáticos y procesos que reducen tareas repetitivas.", "Aplicações digitais": "Aplicaciones digitales", "Portais para clientes, apps web responsivas, áreas premium e interfaces pensadas para uso diário.": "Portales para clientes, aplicaciones web responsivas, áreas premium e interfaces para el uso diario.",
    "Testes de performance": "Pruebas de rendimiento", "Descubra os limites da sua aplicação antes dos seus utilizadores.": "Descubra los límites de su aplicación antes que sus usuarios.", "Planeamos e executamos testes de carga, stress e escalabilidade para identificar lentidão, erros e gargalos antes que afetem o negócio.": "Planificamos y ejecutamos pruebas de carga, estrés y escalabilidad para identificar lentitud, errores y cuellos de botella antes de que afecten al negocio.", "Teste de carga": "Prueba de carga", "Teste de stress": "Prueba de estrés", "Teste de API": "Prueba de API", "Relatório técnico": "Informe técnico",
    "Testes automatizados e reproduzíveis para APIs, serviços web e pipelines de integração contínua.": "Pruebas automatizadas y reproducibles para APIs, servicios web y pipelines de integración continua.", "Simulação de múltiplos utilizadores e cenários de carga para aplicações, APIs e bases de dados.": "Simulación de múltiples usuarios y escenarios de carga para aplicaciones, APIs y bases de datos.", "Análise de performance do código .NET para localizar métodos lentos, consumo de CPU e gargalos.": "Análisis de rendimiento del código .NET para localizar métodos lentos, consumo de CPU y cuellos de botella.", "Análise de memória em aplicações .NET para detetar fugas, retenções e alocações excessivas.": "Análisis de memoria en aplicaciones .NET para detectar fugas, retenciones y asignaciones excesivas.", "O que recebe": "Qué recibe", "Métricas de tempo de resposta, throughput, taxa de erro, CPU e memória, com diagnóstico e recomendações práticas para melhorar a aplicação.": "Métricas de tiempo de respuesta, throughput, tasa de error, CPU y memoria, con diagnóstico y recomendaciones prácticas para mejorar la aplicación.",
    "Produtos digitais já desenhados para resolver problemas reais.": "Productos digitales diseñados para resolver problemas reales.", "Cada projeto combina interface, lógica de negócio e visão comercial: o objetivo não é apenas parecer bem, é ajudar a empresa a vender melhor e operar com menos fricção.": "Cada proyecto combina interfaz, lógica de negocio y visión comercial: el objetivo no es solo verse bien, sino ayudar a la empresa a vender mejor y operar con menos fricción.",
    "Todos": "Todos", "Gestão": "Gestión", "Financeiro": "Finanzas", "Painel principal · valores ocultos": "Panel principal · valores ocultos", "Painel de Controlo": "Panel de Control", "Gestão financeira e custos de obras numa única plataforma": "Gestión financiera y costes de obra en una sola plataforma", "Web app desenvolvido para a Talente Eclipse Cofragem, com controlo por período, entradas, despesas, categorias, fundos, sócios, distribuição de lucros e perfis de acesso para administração e consulta.": "Aplicación web desarrollada para Talente Eclipse Cofragem, con control por período, ingresos, gastos, categorías, fondos, socios, distribución de beneficios y perfiles de acceso.",
    "Controlo financeiro para operações multi-cidade": "Control financiero para operaciones en varias ciudades", "Painel com saldo mensal, entradas, despesas, fluxo de caixa, performance por cidade e ranking de atendimento para equipas comerciais.": "Panel con saldo mensual, ingresos, gastos, flujo de caja, rendimiento por ciudad y ranking de atención para equipos comerciales.", "Agenda operacional para serviços presenciais": "Agenda operativa para servicios presenciales", "Gestão de marcações, clientes, barbeiros, estados de atendimento, lembretes e faturação diária.": "Gestión de citas, clientes, barberos, estados de atención, recordatorios y facturación diaria.", "Relatórios": "Informes", "Visão financeira com metas e desempenho de equipa": "Visión financiera con objetivos y rendimiento del equipo", "Indicadores de receita, formas de pagamento, evolução diária, serviços mais vendidos e comissão.": "Indicadores de ingresos, formas de pago, evolución diaria, servicios más vendidos y comisiones.",
    "Treino Inteligente": "Entrenamiento Inteligente", "Produto digital para personal trainers e alunos": "Producto digital para entrenadores y alumnos", "Experiência premium com treino, pagamentos, vídeos, evolução e acompanhamento numa só plataforma.": "Experiencia premium con entrenamiento, pagos, vídeos, evolución y seguimiento en una sola plataforma.", "Gestão de alunos, planos e convites": "Gestión de alumnos, planes e invitaciones", "Área de treinador com faturação mensal, alunos ativos, links de convite e diretório completo.": "Área del entrenador con facturación mensual, alumnos activos, enlaces de invitación y directorio completo.", "Planos de treino com impressão e uso offline": "Planes de entrenamiento para impresión y uso sin conexión", "Rotinas por nível, carga, séries, descanso, guias de execução e versão PDF para acompanhamento.": "Rutinas por nivel, carga, series, descanso, guías de ejecución y versión PDF para seguimiento.",
    "Como trabalhamos": "Cómo trabajamos", "Da ideia ao sistema em produção, com foco no resultado comercial.": "De la idea al sistema en producción, con foco en los resultados comerciales.", "Diagnóstico": "Diagnóstico", "Mapeamos o processo atual, gargalos, metas e o que precisa de ser medido para vender ou operar melhor.": "Mapeamos el proceso actual, los cuellos de botella, los objetivos y lo que debe medirse para vender u operar mejor.", "Protótipo": "Prototipo", "Desenhamos os fluxos principais e validamos a experiência antes de avançar para o desenvolvimento.": "Diseñamos los flujos principales y validamos la experiencia antes de avanzar al desarrollo.", "Construção": "Construcción", "Implementamos interface, base de dados, autenticação, dashboards, automações e integrações essenciais.": "Implementamos interfaz, base de datos, autenticación, paneles, automatizaciones e integraciones esenciales.", "Evolução": "Evolución", "Acompanhamos métricas, ajustamos funcionalidades e preparamos novas fases conforme o negócio cresce.": "Seguimos las métricas, ajustamos funcionalidades y preparamos nuevas fases a medida que crece el negocio.",
    "Vamos criar o seu próximo sistema": "Creemos su próximo sistema", "Se a sua empresa ainda gere clientes, pagamentos ou relatórios manualmente, há oportunidade de crescer.": "Si su empresa todavía gestiona clientes, pagos o informes manualmente, existe una oportunidad de crecer.", "A RLL Solutions pode desenhar uma plataforma personalizada para o seu negócio, com uma presença digital profissional e ferramentas que aumentam a produtividade.": "RLL Solutions puede diseñar una plataforma personalizada para su negocio, con presencia digital profesional y herramientas que aumentan la productividad.",
    "Nome": "Nombre", "Objetivo": "Objetivo", "Mensagem": "Mensaje", "Quero criar um sistema de gestão": "Quiero crear un sistema de gestión", "Quero automatizar processos": "Quiero automatizar procesos", "Quero um dashboard financeiro": "Quiero un panel financiero", "Quero uma aplicação para clientes": "Quiero una aplicación para clientes", "Quero testes de performance": "Quiero pruebas de rendimiento", "Enviar por email": "Enviar por correo", "Ao enviar, abriremos o WhatsApp com os dados do seu pedido de orçamento já preenchidos.": "Al enviar, abriremos WhatsApp con los datos de su solicitud de presupuesto ya rellenados.", "WhatsApp · Orçamento": "WhatsApp · Presupuesto", "Voltar ao topo": "Volver arriba", "O seu nome": "Su nombre", "Nome da empresa": "Nombre de la empresa", "Conte-nos o que pretende resolver": "Cuéntenos qué desea resolver", "Selecionar idioma": "Seleccionar idioma"
  }
};

const originalText = new Map();
const originalAttributes = new Map();
let activeLanguage = "pt";
const normalize = (value) => value.replace(/\s+/g, " ").trim();
const localized = (value, language) => language === "pt" ? value : translations[language]?.[value] || value;

function collectTranslatableContent() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!normalize(node.nodeValue || "") || node.parentElement?.closest("script, style, [data-no-translate]")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  let node;
  while ((node = walker.nextNode())) originalText.set(node, normalize(node.nodeValue));
  document.querySelectorAll("[placeholder], [aria-label], img[alt]").forEach((element) => {
    const values = {};
    ["placeholder", "aria-label", "alt"].forEach((attribute) => { if (element.hasAttribute(attribute)) values[attribute] = element.getAttribute(attribute); });
    originalAttributes.set(element, values);
  });
}

function updateWhatsAppLinks(language) {
  const messages = {
    pt: { quote: "Olá, RLL Solutions. Gostaria de pedir um orçamento.", diagnostic: "Olá, RLL Solutions. Gostaria de agendar um diagnóstico gratuito.", performance: "Olá, RLL Solutions. Gostaria de pedir um orçamento para testes de performance." },
    en: { quote: "Hello, RLL Solutions. I would like to request a quote.", diagnostic: "Hello, RLL Solutions. I would like to book a free assessment.", performance: "Hello, RLL Solutions. I would like to request a quote for performance testing." },
    es: { quote: "Hola, RLL Solutions. Me gustaría solicitar un presupuesto.", diagnostic: "Hola, RLL Solutions. Me gustaría agendar un diagnóstico gratuito.", performance: "Hola, RLL Solutions. Me gustaría solicitar un presupuesto para pruebas de rendimiento." }
  };
  document.querySelectorAll('a[href^="https://wa.me/"]').forEach((link) => {
    if (!link.dataset.whatsappPurpose) {
      const decoded = decodeURIComponent(link.href);
      link.dataset.whatsappPurpose = decoded.includes("performance") ? "performance" : decoded.includes("diagnóstico") ? "diagnostic" : "quote";
    }
    link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messages[language][link.dataset.whatsappPurpose])}`;
  });
}

function applyLanguage(language) {
  activeLanguage = ["pt", "en", "es"].includes(language) ? language : "pt";
  originalText.forEach((value, node) => { node.nodeValue = localized(value, activeLanguage); });
  originalAttributes.forEach((values, element) => Object.entries(values).forEach(([attribute, value]) => element.setAttribute(attribute, localized(value, activeLanguage))));
  document.documentElement.lang = activeLanguage === "pt" ? "pt-PT" : activeLanguage;
  document.title = activeLanguage === "en" ? "RLL Solutions | Custom Software and Performance" : activeLanguage === "es" ? "RLL Solutions | Software a medida y rendimiento" : "RLL Solutions | Automate, Optimize, Grow";
  languageButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.language === activeLanguage)));
  updateWhatsAppLinks(activeLanguage);
  localStorage.setItem("rll-language", activeLanguage);
}

function updateHeader() { header.classList.toggle("scrolled", window.scrollY > 16); }

collectTranslatableContent();
const savedLanguage = localStorage.getItem("rll-language");
const browserLanguage = navigator.language.toLowerCase().startsWith("es") ? "es" : navigator.language.toLowerCase().startsWith("en") ? "en" : "pt";
applyLanguage(savedLanguage || browserLanguage);
languageButtons.forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.language)));
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

filters.forEach((button) => button.addEventListener("click", () => {
  const activeFilter = button.dataset.filter;
  filters.forEach((item) => item.classList.toggle("active", item === button));
  cases.forEach((item) => { item.hidden = !(activeFilter === "all" || item.dataset.category.includes(activeFilter)); });
}));

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const labels = {
    pt: { intro: "Olá, RLL Solutions. Quero falar sobre um projeto.", name: "Nome", company: "Empresa", goal: "Objetivo", message: "Mensagem", status: "A abrir WhatsApp com a mensagem preparada.", subject: "Pedido de proposta - RLL Solutions" },
    en: { intro: "Hello, RLL Solutions. I would like to discuss a project.", name: "Name", company: "Company", goal: "Goal", message: "Message", status: "Opening WhatsApp with your message ready.", subject: "Quote request - RLL Solutions" },
    es: { intro: "Hola, RLL Solutions. Quiero hablar sobre un proyecto.", name: "Nombre", company: "Empresa", goal: "Objetivo", message: "Mensaje", status: "Abriendo WhatsApp con el mensaje preparado.", subject: "Solicitud de presupuesto - RLL Solutions" }
  }[activeLanguage];
  const message = [labels.intro, "", `${labels.name}: ${data.get("nome") || ""}`, `${labels.company}: ${data.get("empresa") || ""}`, `${labels.goal}: ${data.get("objetivo") || ""}`, "", `${labels.message}: ${data.get("mensagem") || ""}`].join("\n");
  const body = encodeURIComponent(message);
  formNote.textContent = labels.status;
  window.location.href = whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${body}` : `mailto:${contactEmail}?subject=${encodeURIComponent(labels.subject)}&body=${body}`;
});
