from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=300)
    email = models.CharField(max_length=300)
    password = models.CharField(max_length=300)

class Image(models.Model):
    name = models.CharField(max_length=300)
    width = models.IntegerField()
    height = models.IntegerField()
    picture = models.FileField()

class Image1(models.Model):
    name = models.CharField(max_length=300)
    useremail = models.CharField(max_length=300)
    picture = models.FileField()