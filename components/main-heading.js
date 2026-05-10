export function mountMainHeading(containerId = "main-heading") {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <header class="py-10 px-6">
      <div class="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <div class="text-center md:text-left">
          <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">
            UGAC
          </h1>
          <p class="mt-3 text-slate-300 max-w-3xl">
            Undergraduate Academic Council — bridging students and UG Senate at IIT Mandi.
          </p>
        </div>
        <img
          src="./iit-mandi-01.jpg"
          alt="IIT Mandi logo"
          class="w-20 h-20 md:w-24 md:h-24 object-contain opacity-95"
          loading="eager"
          decoding="async"
        />
      </div>
    </header>
  `.trim();
}
