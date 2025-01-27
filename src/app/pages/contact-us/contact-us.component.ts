import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  imports: [NgFor],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  faqs = [
    {
      id: 1,
      question: 'ما هو أفضل لابتوب للألعاب؟',
      answer: 'أفضل لابتوب للألعاب يعتمد على كرت الشاشة والمعالج. من الخيارات الشائعة: Alienware، ROG من ASUS.'
    },
    {
      id: 2,
      question: 'كم يجب أن تكون ذاكرة RAM لجهاز لابتوب حديث؟',
      answer: 'للاستخدام العادي، 8 جيجابايت كافية. للألعاب والبرامج الثقيلة، يفضل 16 جيجابايت أو أكثر.'
    },
    {
      id: 3,
      question: 'هل اللابتوبات تأتي مع ضمان؟',
      answer: 'نعم، معظم اللابتوبات تأتي بضمان يتراوح من سنة إلى ثلاث سنوات حسب الشركة المصنعة.'
    },
    {
      id: 4,
      question: 'ما هي أفضل العلامات التجارية للابتوبات؟',
      answer: 'من أشهر العلامات التجارية: Apple، Dell، HP، Lenovo، ASUS، Acer.'
    }
  ];
}