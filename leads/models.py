from django.db import models
from tinymce.models import HTMLField


class Lead(models.Model):
    company = models.CharField(max_length=100)
    title = models.CharField(max_length=300)
    overview = models.CharField(max_length=300)
    video_link = HTMLField(default='remember about embeed video')
    event_date =  models.DateTimeField(auto_now_add=False, blank=True, null=True)

    def __str__(self):
        return self.company