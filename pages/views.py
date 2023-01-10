from django.http import HttpResponse
from django.shortcuts import render
from django.template import RequestContext
import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
# Create your views here.
def home_view(request, *args, **kwargs):
    home_context={ 'media': os.path.join(BASE_DIR, 'media\\')}
    return render(request, 'home.html', home_context)
def login_view(request, *args, **kwargs):
    login_context={ 'media': os.path.join(BASE_DIR, 'media\\')}
    return render(request, 'login.html', login_context)
def signup_view(request, *args, **kwargs):
    signup_context={ 'media': os.path.join(BASE_DIR, 'media\\')}
    return render(request, 'signup.html', signup_context)
# def editor_view(request, *args, **kwargs):
#     editor_context={ 'media': os.path.join(BASE_DIR, 'media\\')}
#     return render(request, 'editor.html', editor_context)
def index_view(request, *args, **kwargs):
    index_context={ 'media': os.path.join(BASE_DIR, 'media\\')}
    return render(request, 'index.html', index_context)





def temp_view(request, *args, **kwargs):
    print(request.user)
    return render(request, 'temp.html', {})