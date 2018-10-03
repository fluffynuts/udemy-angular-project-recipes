import { Directive, ElementRef, HostListener, Input, ViewChild } from "@angular/core";

@Directive({
  selector: "[appDropDownToggle]"
})
export class DropDownToggleDirective {
  @ViewChild(".dropdown-menu") _menuElement: HTMLElement;
  constructor(private _elementRef: ElementRef<HTMLElement>) {
  }

  @HostListener("click")
  public onClick() {

    const target = this._elementRef.nativeElement.parentElement.querySelector(".dropdown-menu");
    const
      current = Array.from(target.classList),
      open = current.indexOf("show") > -1;
    if (open) {
      target.classList.remove("show");
    } else {
      target.classList.add("show");
    }
  }
}
