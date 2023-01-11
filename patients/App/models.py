from django.db import models
# PAtient
class Patient(models.Model):
    GENDER = (
        ('F', 'F'),
        ('M', 'M'),
    )
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    age = models.CharField(max_length=100)
    gender = models.CharField(max_length=100, null=True, choices=GENDER)
    note = models.TextField(blank=True)
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

#SUPPORT
OPTION =(
    ('It happened to me','It happened to me'),
    ('It was already like that','It was already like that'),
)

REASON=(
    ('Delete patient','Delete patient'),
    ('System problems', 'System problems'),
    ('Others', 'Others'),
)
SITUATION = (
    ('Done','Done'),
    ('Pending','Pending'),
)

class Call(models.Model):
    terms = models.BooleanField("You got this responsability")
    user = models.CharField(max_length=100)
    message = models.TextField()
    option = models.CharField(max_length=100, choices=OPTION)
    reason = models.CharField(max_length=100, choices=REASON)
    created_at = models.DateTimeField(auto_now_add=True)
    Situation = models.CharField(max_length=100, null=True, choices=SITUATION, default="Pending")
    def __str__(self):
        return self.user