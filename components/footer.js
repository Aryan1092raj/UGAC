export function mountFooter(containerId = "footer") {
  const container = document.getElementById(containerId);
  if (!container) return;

  const year = new Date().getFullYear();
  const safeBlank = 'target="_blank" rel="noreferrer"';
  container.innerHTML = `
    <footer class="border-t border-slate-700/50 mt-14 pt-10 pb-8 text-slate-300">
      <div class="grid md:grid-cols-3 gap-10 md:gap-16 px-6">
        <div class="md:col-span-2 space-y-6">
          <div class="space-y-3">
            <h3 class="text-2xl font-semibold text-white">About UGAC</h3>
            <p class="text-slate-300 leading-relaxed">
              UG Academic Council (UGAC) is official student academic body at IIT Mandi for undergraduates. It supports academic policies,
              student issues, and coordination with institute academic system.
            </p>
          </div>

          <div class="grid sm:grid-cols-2 gap-8">
            <div class="space-y-2">
              <h4 class="text-lg font-semibold text-white">Main contact</h4>
              <p class="text-slate-300">UG Academic Affairs Secretary email:</p>
              <a class="text-yellow-200 hover:underline break-all" href="mailto:academic_secretary@students.iitmandi.ac.in">
                academic_secretary@students.iitmandi.ac.in
              </a>
              <p class="text-slate-400 text-sm">
                Main official UG academic contact listed in IIT Mandi directory.
              </p>
            </div>

            <div class="space-y-3">
              <h4 class="text-lg font-semibold text-white">Social links</h4>
              <div class="flex flex-col gap-2">
                <a class="hover:text-yellow-200 hover:underline underline-offset-4" href="https://www.instagram.com/iitmandi.acadcouncil" ${safeBlank}>
                  Instagram: iitmandi.acadcouncil
                </a>
                <a class="hover:text-yellow-200 hover:underline underline-offset-4" href="https://www.facebook.com/" ${safeBlank}>
                  Facebook: Academic Council, IIT Mandi
                </a>
              </div>
            </div>
          </div>

          <div class="space-y-2">
            <h4 class="text-lg font-semibold text-white">Useful info</h4>
            <p class="text-slate-300">UG Academic Handbook is produced by UG Academic Council.</p>
            <p class="text-slate-400 text-sm">Directory lists Academic Affairs Secretary under Academic Affairs section.</p>
          </div>
        </div>

        <aside class="space-y-4">
          <h3 class="text-2xl font-semibold text-white">Links</h3>
          <ul class="space-y-3 text-slate-300">
            <li><a class="hover:text-yellow-200 hover:underline underline-offset-4" href="https://www.iitmandi.ac.in/" ${safeBlank}>IIT Mandi</a></li>
            <li><a class="hover:text-yellow-200 hover:underline underline-offset-4" href="#resources">Students</a></li>
            <li><a class="hover:text-yellow-200 hover:underline underline-offset-4" href="#team">Contact</a></li>
          </ul>
        </aside>
      </div>

      <div class="mt-10 pt-6 border-t border-slate-700/40 text-center text-xs text-slate-400 px-6">
        <p>© ${year} UGAC, IIT Mandi</p>
      </div>
    </footer>
  `.trim();
}
