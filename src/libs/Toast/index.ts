import ReactToastifyAdaptor, { ToastService } from "./ToastifyService";

class Toast {
  constructor(private toastService: ToastService) {}

  public showSuccess(message: string) {
    this.toastService.success(message);
  }

  public showError(message: string) {
    this.toastService.error(message);
  }

  public showInfo(message: string) {
    this.toastService.info(message);
  }
}

export default new Toast(new ReactToastifyAdaptor());
