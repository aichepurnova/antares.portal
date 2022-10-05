from django.contrib import admin

# Register your models here.
from .models import QuestionsBase

# admin.site.register(QuestionsBase)
@admin.register(QuestionsBase)
class QuestionsBase(admin.ModelAdmin):
    list_display = ('QuestionText', 'QuestionNum', 'BaseText', 'BaseNum')
    list_filter = ('BaseText', 'BaseNum')
