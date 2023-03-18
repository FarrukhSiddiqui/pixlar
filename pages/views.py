from django.http import HttpResponse
from django.shortcuts import render
from django.template import RequestContext
import os
from pathlib import Path

from .models import User, Image1

user_list=User.objects.all()
users={}
for i in user_list:
    User._meta.get_fields()[0].value_from_object(i)
    users[User._meta.get_fields()[0].value_from_object(i)]=[User._meta.get_fields()[1].value_from_object(i),
            User._meta.get_fields()[2].value_from_object(i),User._meta.get_fields()[3].value_from_object(i)]

image_list=Image1.objects.all()
images={}
for i in image_list:
    Image1._meta.get_fields()[0].value_from_object(i)
    images[Image1._meta.get_fields()[0].value_from_object(i)]=[Image1._meta.get_fields()[1].value_from_object(i),
            Image1._meta.get_fields()[2].value_from_object(i),Image1._meta.get_fields()[3].value_from_object(i)]
    
current_user=[]

BASE_DIR = Path(__file__).resolve().parent.parent
# Create your views here.
def home_view(request, *args, **kwargs):
    home_context={ 'media': os.path.join(BASE_DIR, 'media\\'),
                    'usereee': User._meta.get_fields()[1].value_from_object(User.objects.first()),
                    'users':users}
    # print(request.GET)
    return render(request, 'home.html', home_context)
def login_view(request, *args, **kwargs):
    login_context={ 'media': os.path.join(BASE_DIR, 'media\\'),
                    'user_exists':False}
    try:
        login_email=dict(request.GET)['email']
        login_password=dict(request.GET)['password']
        global users, current_user
        for i in users:
            # print(users[i][1],users[i][2],login_email[0],login_password[0])
            if users[i][1] == login_email[0] and users[i][2] == login_password[0]:
                login_context['user_exists']=True
                current_user=[users[i][0],login_email[0],login_password[0]]
    except:
        pass


    return render(request, 'login.html', login_context)


def signup_view(request, *args, **kwargs):
    signup_context={ 'media': os.path.join(BASE_DIR, 'media\\'),
                    'user_exists':None}
    try:
        signup_username=dict(request.GET)['username']
        signup_email=dict(request.GET)['email']
        signup_password=dict(request.GET)['password']
        global users, current_user
        for i in users:
            if users[i][1] == signup_email[0]:
                signup_context['user_exists']=True
            else:
                signup_context['user_exists']=False
                break
        if signup_context['user_exists']==False:
            User.objects.create(username=str(signup_username[0]), email=str(signup_email[0]), password=str(signup_password[0]))
            current_user=[signup_username[0],signup_email[0],signup_password[0]]
    except:
        pass

    return render(request, 'signup.html', signup_context)


# def editor_view(request, *args, **kwargs):
#     editor_context={ 'media': os.path.join(BASE_DIR, 'media\\')}
#     return render(request, 'editor.html', editor_context)


def index_view(request, *args, **kwargs):
    global current_user, images
    
    if len(current_user)==0:
        current_user=['Guest','Guest','Pass']


    index_context={ 'media': os.path.join(BASE_DIR, 'media\\'),
                    'user':str(current_user[0]),
                    'image':images[1][2]}

    
    if request.method=='POST':
        print(request.POST)
        print(request.FILES['pic'])
        img=Image1()
        img.name=str(request.FILES['pic'])
        img.useremail=current_user[1]
        if len(request.FILES) != 0:
            img.picture=request.FILES['pic']

        img.save()


    return render(request, 'index.html', index_context)

def blank_view(request, *args, **kwargs):
    print(request.user)
    return render(request, 'blank.html', {})

def temp_view(request, *args, **kwargs):
    print(request.user)
    return render(request, 'temp.html', {})

# User.objects.all() # returns all objects in model
# User._meta.get_fields()[1].value_from_object(User.objects.first())