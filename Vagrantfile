# frozen_string_literal: true

# -*- mode: ruby -*-
# vi: set ft=ruby :

require 'yaml'
conf = YAML.load_file('vagrant_conf.yaml')

def configure_shell(config, conf)
  config.vm.provision 'shell',
                      args: [conf['root_db_passwd'].to_s, conf['default_user'].to_s, conf['default_passwd'].to_s, '/home/vagrant'], inline: <<-SHELL
    sudo apt-get update && sudo apt-get upgrade -y && \
    sudo apt-get dist-upgrade -y && sudo apt install curl -y && \
    sudo apt install net-tools -y
    sudo -s -u vagrant \
    sudo curl -s https://cairis.org/quickInstall.sh | bash -s -- $1 $2 $3 $4
                      SHELL
end

def configure_parallels_provider(config, memory = 2048)
  config.vm.provider :parallels do |_parallels, override|
    # override box url
    override.vm.box = 'bento/ubuntu-20.04-arm64'
    override.parallels.memory = memory
  end
end

def configure_vbox_provider(config, memory = 2048)
  config.vm.provider :virtualbox do |_vbox, override|
    # override box url
    override.vm.box = 'bento/ubuntu-22.04'
    # enable cachier for local vbox vms
    override.cache.auto_detect = true
    override.vb.memory = memory
  end
end

def provision_ubuntu(config)
  system_update = ''
  dev_packages = <<-SHELL
      apt-get install -y emacs-nox htop tmux
  SHELL

  config.vm.provision 'shell', inline: <<-SHELL
    set -x

    apt-get update

    #{system_update}

    # To avoid falling over during spiky RAM utilization, allow swap to
    # dynamically expand.
    apt-get install -y swapspace

    apt-get install -y net-tools

    su -c 'curl https://sh.rustup.rs -sSf | sh -s -- -y' - vagrant

    #{dev_packages}
  SHELL
end

def provider_linux(config)
  %w[vmware_fusion vmware_workstation].each do |provider|
    config.vm.provider provider do |vmware, _override|
      # gcc uses 1.5 GB per process with Facebook style C++ :|
      cpu_count = Etc.nprocessors / 2
      vmware.cpus = cpu_count
      vmware.memory = 1536 * cpu_count
    end
  end
end

Vagrant.configure('2') do |config|
  [:parallels, :vbox].each do |provider|
    #
    # VM per provider
    #
    config.vm.define :"cairis-#{provider}" do |cairis_config|
      case provider
      when :vbox
        configure_vbox_provider(cairis_config)
        configure_shell(cairis_config, conf)
      when :parallels
        configure_parallels_provider(cairis_config)
        configure_shell(cairis_config, conf)
      end
    end
  end
end
