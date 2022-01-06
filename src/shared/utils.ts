export function loading(comp: { loading: boolean }, h: any) {
  if (comp.loading)
    setTimeout(() => {
      comp.loading = false;
    }, 0);
  else return h;
}
