document.addEventListener('DOMContentLoaded',()=>{
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
      tabs.forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
      // In a full app, we'd switch sections. For the wireframe, keep Overview visible.
    });
  });
});
