from django.db import models
from ckeditor.fields import RichTextField

class Lead(models.Model):
    company = models.CharField(max_length=100)
    title = models.CharField(max_length=300)
    overview = models.CharField(max_length=300)
    video_link = RichTextField(default='dont forget bout link')
    event_date =  models.DateTimeField(auto_now_add=False, blank=True, null=True)
    dateTo = models.DateTimeField(auto_now=False, blank=True, null=True )
    figure = (
        ('year', 'year'),
        ('month', 'month'),
        ('day', 'day'),
        ('hour', 'hour'),
    )
    mostSignificantFigure = models.CharField(max_length=10, choices=figure, default= 'day')
    posible_numbers = (
        ('1', '1'),
        ('2', '2'),
        ('3', '3'),
        ('4', '4'),
        ('5', '5'),
        ('6', '6'),
    )
    numberOfFigures = models.CharField(max_length=10,null=True, choices= posible_numbers, blank=True, default=5)

    def __str__(self):
        return self.company

