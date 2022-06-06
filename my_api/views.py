from django.shortcuts import render
from rest_framework import viewsets
from .models import Resume, Projects
from .serializers import ResumeSerializer, ProjectsSerializer

# Create your views here.


class ResumeView(viewsets.ModelViewSet):
  """ API end point that allows Resume to be viewed or edited """

  queryset = Resume.objects.all()
  serializer_class = ResumeSerializer


class ProjectsView(viewsets.ModelViewSet):
  """ API end point that allows Resume to be viewed or edited """

  queryset = Projects.objects.all()
  serializer_class = ProjectsSerializer