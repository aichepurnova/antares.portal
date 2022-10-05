from django.shortcuts import render
from .models import QuestionsBase
from django.http import HttpResponse
import json
import random
from django.core import serializers

# Create your views here.
def rules(request):
    return render(request, 'reverseapp/rules.html')

# def game(request):
#     Questions = list(QuestionsBase.objects.values())
#     Question = random.sample(Questions, 1)
#     Question = str(Question[0]['QuestionText'])
#     context = {"Questions": Question}
#     # return HttpResponse(json.dumps(QuestionText))
#     return render(request, 'reverseapp/game.html', context)

def game(request):
    Questions = QuestionsBase.objects.all().order_by('QuestionNum') 
    Questions_html = []
    for instance in QuestionsBase.objects.all():  # it's not serialization, but extracting of the useful fields
        Questions_html.append({'QuestionText': instance.QuestionText})
    Questions_dic = {'Questions': Questions, 'ac_tab_n': 'ac_tab', 'Questions_html': Questions_html}
    return render(request, 'reverseapp/game.html', Questions_dic)