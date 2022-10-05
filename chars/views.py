from django.shortcuts import render

# Create your views here.
def chars(request):
    return render(request, 'chars/chars.html')
