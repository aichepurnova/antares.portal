from django.shortcuts import render

# Create your views here.
def about(request):
    return render(request, 'personal/about.html')

def home(request):
    return render(request, 'personal/home.html')