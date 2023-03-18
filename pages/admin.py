from django.contrib import admin

from .models import User, Image, Image1
# Register your models here.
admin.site.register(User)
admin.site.register(Image)
admin.site.register(Image1)