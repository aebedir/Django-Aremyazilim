from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request,'index.html')

def asansoravan(request):
    return render(request,'asansoravan.html')

def contact(request):
    return render(request,'contact.html')