from django.shortcuts import render
from rest_framework import viewsets
from .models import Resume
from .serializers import ResumeSerializer

# Create your views here.


class ResumeView(viewsets.ModelViewSet):
  """ API end point that allows Resume to be viewed or edited """

  queryset = Resume.objects.all().order_by("start_date")
  serializer_class = ResumeSerializer